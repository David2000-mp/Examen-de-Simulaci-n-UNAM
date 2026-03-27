import { lazy, Suspense, useState } from "react";
const RadarByAxis = lazy(() => import("./charts/RadarByAxis"));

function ReviewPanel({ questions, answers }) {
  const [open, setOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="rounded-xl border border-brand-200 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between bg-brand-50 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-brand-900 text-sm">
          Revisión completa de respuestas
          <span className="ml-2 rounded-full bg-brand-200 px-2 py-0.5 text-xs text-brand-800">
            {questions.length} preguntas
          </span>
        </span>
        <span className="text-brand-600 text-lg" aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="divide-y divide-slate-100 bg-white">
          {questions.map((q) => {
            const userIdx = answers[q.id];
            const correct = userIdx === q.respuesta_correcta;
            const unanswered = userIdx === undefined || userIdx === null;
            const isExpanded = expandedId === q.id;

            return (
              <div key={q.id}>
                <button
                  type="button"
                  onClick={() => !correct && toggleExpand(q.id)}
                  className={`flex w-full items-start gap-3 px-4 py-3 text-left transition ${
                    !correct ? "hover:bg-slate-50 cursor-pointer" : "cursor-default"
                  }`}
                  aria-expanded={!correct ? isExpanded : undefined}
                >
                  <span
                    className={`mt-0.5 shrink-0 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold ${
                      unanswered
                        ? "bg-slate-200 text-slate-600"
                        : correct
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-rose-100 text-rose-700"
                    }`}
                    aria-label={unanswered ? "Sin responder" : correct ? "Correcta" : "Incorrecta"}
                  >
                    {unanswered ? "—" : correct ? "✓" : "✗"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-400">{q.eje} · {q.tema}</p>
                    <p className={`text-sm mt-0.5 ${correct ? "text-slate-700" : "font-medium text-ink"}`}>
                      {q.pregunta}
                    </p>
                  </div>
                  {!correct && (
                    <span className="shrink-0 text-xs text-slate-400 mt-0.5" aria-hidden="true">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  )}
                </button>

                {!correct && isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50 px-4 pb-4 pt-3 space-y-2">
                    {!unanswered && (
                      <div className="rounded-lg border border-rose-200 bg-rose-50 p-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-rose-700">Tu respuesta</p>
                        <p className="mt-1 text-sm text-rose-900">{q.opciones[userIdx]}</p>
                      </div>
                    )}
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Respuesta correcta</p>
                      <p className="mt-1 text-sm text-emerald-900">{q.opciones[q.respuesta_correcta]}</p>
                    </div>
                    {q.justificacion && (
                      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-amber-800">Justificación</p>
                        <p className="mt-1 text-sm text-amber-900">{q.justificacion}</p>
                        <p className="mt-1 text-xs text-amber-700">📖 {q.lectura_origen}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Dashboard({ stats, onRestart, onRetryErrors, onDownloadGuide }) {
  const [shareLabel, setShareLabel] = useState("Compartir");

  const handleShare = () => {
    const { overall, axisScores } = stats;
    const text = `Obtuve ${overall}% en el Simulacro UNAM Trabajo Social 🎓\nHistoria: ${axisScores.Historia}% · Metodología: ${axisScores["Metodología"]}% · Teoría Social: ${axisScores["Teoría"]}%`;
    if (window.navigator.share) {
      window.navigator.share({ title: "Mi resultado UNAM-TS", text }).catch(() => {});
    } else {
      window.navigator.clipboard.writeText(text).then(() => {
        setShareLabel("¡Copiado!");
        window.setTimeout(() => setShareLabel("Compartir"), 2000);
      });
    }
  };

  if (!stats) {
    return null;
  }

  const detailedErrors = stats.erroresDetallados?.items || [];
  const weakestAxis = Object.entries(stats.axisScores || {}).sort((a, b) => a[1] - b[1])[0]?.[0];
  const orderedErrors = [...detailedErrors].sort((a, b) => {
    const aWeak = a.eje === weakestAxis;
    const bWeak = b.eje === weakestAxis;
    if (aWeak !== bWeak) {
      return aWeak ? -1 : 1;
    }
    return a.eje.localeCompare(b.eje);
  });

  return (
    <section className="space-y-5 rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-brand-100 sm:p-6">
      <header>
        <h2 className="font-serif text-2xl text-brand-900">Resultados del intento</h2>
        <p className="mt-1 text-sm text-slate-600">Porcentaje global de aciertos: <strong>{stats.overall}%</strong></p>
      </header>

      {/* Sticky action bar — always visible while scrolling */}
      <div className="sticky top-10 z-40 -mx-4 flex flex-wrap items-center justify-between gap-2 border-y border-brand-200 bg-white/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <span className="text-sm font-bold text-brand-900">
          {stats.overall >= 70 ? "🌟" : stats.overall >= 40 ? "⚠️" : "📚"}
          {" "}{stats.overall}% global
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onRetryErrors}
            disabled={!stats.trainingAvailable}
            aria-label="Reintentar solamente las preguntas incorrectas"
            className="rounded-lg bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reintentar errores
          </button>
          <button
            type="button"
            onClick={onDownloadGuide}
            disabled={!orderedErrors.length}
            aria-label="Descargar guia de estudio personalizada en formato Markdown"
            className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Descargar Guía (.md)
          </button>
          <button
            type="button"
            onClick={handleShare}
            aria-label="Compartir o copiar resultado al portapapeles"
            className="rounded-lg border border-brand-300 bg-white px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-50"
          >
            {shareLabel}
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-lg border border-brand-300 bg-white px-3 py-1.5 text-xs font-semibold text-brand-800 hover:bg-brand-50"
          >
            Reiniciar simulador
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {Object.entries(stats.axisScores).map(([axis, score]) => (
          <article key={axis} className="rounded-xl bg-brand-50 p-3 ring-1 ring-brand-100">
            <p className="text-sm font-semibold text-brand-900">{axis}</p>
            <p className="text-2xl font-bold text-brand-800">{score}%</p>
          </article>
        ))}
      </div>

      <div>
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-800">Visualizacion por eje</h3>
        <Suspense fallback={<div className="h-72 animate-pulse rounded-xl bg-slate-100" />}>
          <RadarByAxis axisScores={stats.axisScores} />
        </Suspense>
      </div>

      <div className="space-y-3 rounded-xl border border-brand-200 bg-brand-50/70 p-4">
        <h3 className="text-lg font-semibold text-brand-900">Analisis de Brechas</h3>
        <p className="text-sm text-slate-700">
          Refuerza primero el eje con menor puntaje y enfocate en los errores con mayor impacto.
        </p>
      </div>

      {stats.progress?.totalSessions > 0 && (
        <div className="space-y-3 rounded-xl border border-brand-200 bg-brand-50/70 p-4">
          <h3 className="text-lg font-semibold text-brand-900">Historial de Progreso</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-3 ring-1 ring-brand-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Sesiones completadas</p>
              <p className="text-2xl font-bold text-brand-900">{stats.progress.totalSessions}</p>
            </div>
            <div className="rounded-lg bg-white p-3 ring-1 ring-brand-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Mejor puntaje global</p>
              <p className="text-2xl font-bold text-emerald-700">{stats.progress.bestScores.overall}%</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-700">Mejores puntajes por eje</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {["Historia", "Metodología", "Teoría"].map((axis) => (
                <div key={axis} className="rounded-lg bg-white p-2 ring-1 ring-brand-100 text-center">
                  <p className="text-xs text-slate-600">{axis}</p>
                  <p className="text-lg font-bold text-brand-800">{stats.progress.bestScores[axis]}%</p>
                </div>
              ))}
            </div>
          </div>
          {stats.progress.sessions.length > 1 && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Evolución últimas {Math.min(stats.progress.sessions.length, 10)} sesiones
              </p>
              <div className="flex h-12 items-end gap-1">
                {stats.progress.sessions.slice(-10).map((s, i) => (
                  <div
                    key={s.sessionId ?? i}
                    title={`${s.overall}% — ${new Date(s.finishedAt).toLocaleDateString()}`}
                    aria-label={`Sesión ${i + 1}: ${s.overall}%`}
                    className={`flex-1 rounded-sm ${
                      s.overall >= 70 ? "bg-emerald-400" : s.overall >= 40 ? "bg-amber-400" : "bg-rose-400"
                    }`}
                    style={{ height: `${Math.max(4, s.overall)}%` }}
                  />
                ))}
              </div>
              <p className="mt-1 text-xs text-slate-500">Verde ≥ 70% · Ámbar ≥ 40% · Rojo &lt; 40%</p>
            </div>
          )}
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-brand-900">Lecturas sugeridas (priorizadas)</h3>
        <p className="text-sm text-slate-600">
          Se priorizan primero lecturas del eje con menor puntaje, luego por frecuencia de error.
        </p>
        <ul className="mt-3 space-y-2">
          {stats.recommendations.map((item) => (
            <li key={`${item.eje}-${item.lectura}`} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
              <p className="font-semibold text-ink">{item.lectura}</p>
              <p className="text-slate-600">
                Eje: {item.eje} · Errores asociados: {item.count}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-brand-900">Revision Critica de Errores</h3>
        <p className="text-sm text-slate-600">
          Ordenados priorizando el eje mas debil para acelerar tu recuperacion academica.
        </p>

        {orderedErrors.length ? (
          <div className="mt-3 space-y-3">
            {orderedErrors.map((error, index) => (
              <article key={`${error.questionId}-${index}`} className="rounded-xl border border-rose-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                  Error {index + 1} · {error.eje} · {error.tema}
                </p>
                <p className="mt-2 text-sm font-semibold text-ink">{error.pregunta_original}</p>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-rose-300 bg-rose-50 p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-rose-700">Tu respuesta</p>
                    <p className="mt-1 text-sm text-rose-900">{error.respuesta_usuario?.texto || "Sin respuesta"}</p>
                  </div>
                  <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Respuesta correcta</p>
                    <p className="mt-1 text-sm text-emerald-900">{error.respuesta_correcta?.texto || "No disponible"}</p>
                  </div>
                </div>

                <div className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-800">Justificacion del autor</p>
                  <p className="mt-1 text-sm text-amber-900">{error.justificacion_autor}</p>
                  <p className="mt-2 text-xs text-amber-800">Lectura sugerida: {error.lectura_origen}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
            Excelente: no se registraron errores en esta sesion.
          </p>
        )}
      </div>

      {stats.questions?.length > 0 && (
        <ReviewPanel questions={stats.questions} answers={stats.answers} />
      )}

    </section>
  );
}
