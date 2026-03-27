const AXES = ["Historia", "Metodología", "Teoría"];

function normalizeQuestion(raw, index) {
  const lectura = raw.lectura_origen || raw.lectura_origien || "Lectura no especificada";
  const opciones = Array.isArray(raw.opciones) ? raw.opciones.slice(0, 4) : [];
  const respuesta = Number(raw.respuesta_correcta);

  if (!raw.id || !raw.eje || !raw.pregunta || opciones.length !== 4 || Number.isNaN(respuesta)) {
    return {
      valid: false,
      error: `Registro invalido en posicion ${index}`
    };
  }

  if (respuesta < 0 || respuesta > 3) {
    return {
      valid: false,
      error: `respuesta_correcta fuera de rango en id ${raw.id}`
    };
  }

  return {
    valid: true,
    question: {
      ...raw,
      lectura_origen: lectura,
      respuesta_correcta: respuesta,
      eje: AXES.includes(raw.eje) ? raw.eje : "Teoría"
    }
  };
}

export async function loadAndSanitizeQuestions() {
  const module = await import("../data/preguntas.json");
  const rows = Array.isArray(module.default) ? module.default : [];
  const seen = new Set();
  const errors = [];
  const questions = [];

  rows.forEach((raw, index) => {
    const result = normalizeQuestion(raw, index);
    if (!result.valid) {
      errors.push(result.error);
      return;
    }

    if (seen.has(result.question.id)) {
      errors.push(`id duplicado: ${result.question.id}`);
      return;
    }

    seen.add(result.question.id);
    questions.push(result.question);
  });

  return { questions, errors };
}

export function filterByAxis(questions, axis) {
  if (!axis || axis === "General") {
    return questions;
  }
  return questions.filter((q) => q.eje === axis);
}

export function shuffleQuestions(list) {
  const output = [...list];
  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

export function computeStats(questions, answers) {
  const totals = {
    Historia: { total: 0, aciertos: 0 },
    Metodología: { total: 0, aciertos: 0 },
    Teoría: { total: 0, aciertos: 0 }
  };

  const errors = [];

  questions.forEach((q) => {
    const userAnswer = answers[q.id];
    const hit = userAnswer === q.respuesta_correcta;
    totals[q.eje].total += 1;
    if (hit) {
      totals[q.eje].aciertos += 1;
    } else {
      errors.push(q);
    }
  });

  const axisScores = Object.fromEntries(
    Object.entries(totals).map(([axis, data]) => {
      const score = data.total ? Math.round((data.aciertos / data.total) * 100) : 0;
      return [axis, score];
    })
  );

  const totalQuestions = questions.length || 1;
  const totalHits = Object.values(totals).reduce((acc, curr) => acc + curr.aciertos, 0);
  const overall = Math.round((totalHits / totalQuestions) * 100);

  return { axisScores, overall, errors };
}

export function buildDetailedErrors(questions, answers) {
  const items = [];
  const byAxis = {
    Historia: 0,
    Metodología: 0,
    Teoría: 0
  };

  questions.forEach((q) => {
    const userIndex = answers[q.id];
    const correctIndex = q.respuesta_correcta;
    const isCorrect = userIndex === correctIndex;

    if (isCorrect) {
      return;
    }

    const safeUserIndex = Number.isInteger(userIndex) ? userIndex : null;
    const safeCorrectIndex = Number.isInteger(correctIndex) ? correctIndex : null;

    byAxis[q.eje] = (byAxis[q.eje] || 0) + 1;

    items.push({
      questionId: q.id,
      pregunta_original: q.pregunta,
      respuesta_usuario: {
        index: safeUserIndex,
        texto: safeUserIndex === null ? "Sin respuesta" : q.opciones[safeUserIndex]
      },
      respuesta_correcta: {
        index: safeCorrectIndex,
        texto: safeCorrectIndex === null ? "No disponible" : q.opciones[safeCorrectIndex]
      },
      justificacion_autor: q.justificacion || "Sin justificación disponible.",
      eje: q.eje,
      tema: q.tema,
      lectura_origen: q.lectura_origen || "Lectura no especificada"
    });
  });

  return {
    items,
    byAxis,
    generatedAt: Date.now()
  };
}

export function buildTrainingSubset(allQuestions, detailedErrors) {
  if (!Array.isArray(allQuestions) || !detailedErrors?.items?.length) {
    return [];
  }

  const failedIds = new Set(detailedErrors.items.map((item) => item.questionId));
  return allQuestions.filter((q) => failedIds.has(q.id));
}

export function buildStudyGuideText(detailedErrors, axisScores = {}) {
  const safeErrors = Array.isArray(detailedErrors?.items) ? detailedErrors.items : [];

  const axes = ["Historia", "Metodología", "Teoría"];
  const sections = axes
    .map((axis) => {
      const score = axisScores[axis] ?? 0;
      const axisErrors = safeErrors.filter((error) => error.eje === axis);

      if (!axisErrors.length) {
        return [`## ${axis}`, `Puntaje: ${score}%`, "", "Sin preguntas fallidas en este eje.", ""].join("\n");
      }

      const entries = axisErrors
        .map((error, idx) => {
          return [
            `### Pregunta fallida ${idx + 1}: ${error.tema}`,
            `Pregunta: ${error.pregunta_original}`,
            `Tu respuesta: ${error.respuesta_usuario.texto}`,
            `**Respuesta Correcta:** ${error.respuesta_correcta.texto}`,
            `> Justificación del Autor: ${error.justificacion_autor}`,
            `Lectura sugerida: ${error.lectura_origen}`,
            "---"
          ].join("\n");
        })
        .join("\n\n");

      return [`## ${axis}`, `Puntaje: ${score}%`, "", entries, ""].join("\n");
    })
    .join("\n");

  return [
    "# Guía de Estudio Personalizada - Simulador UNAM Trabajo Social",
    "",
    "## Resumen por Ejes",
    ...axes.map((axis) => `- ${axis}: ${axisScores[axis] ?? 0}%`),
    "",
    sections,
    "",
    "*Generado con ayuda de Mazapán 🐾 - Simulador de Maestría TS UNAM*"
  ].join("\n");
}

export function getPriorityReadings(errors, axisScores, limit = 6) {
  const weakestAxis = Object.entries(axisScores).sort((a, b) => a[1] - b[1])[0]?.[0] || "Historia";
  const counts = new Map();

  errors.forEach((q) => {
    const key = `${q.eje}::${q.lectura_origen}`;
    if (!counts.has(key)) {
      counts.set(key, {
        eje: q.eje,
        lectura: q.lectura_origen,
        count: 0,
        isWeakAxis: q.eje === weakestAxis
      });
    }
    counts.get(key).count += 1;
  });

  return [...counts.values()]
    .sort((a, b) => {
      if (a.isWeakAxis !== b.isWeakAxis) {
        return a.isWeakAxis ? -1 : 1;
      }
      return b.count - a.count;
    })
    .slice(0, limit);
}

export const axes = AXES;
