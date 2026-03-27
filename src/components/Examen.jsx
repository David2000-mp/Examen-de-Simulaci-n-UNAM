import { useState } from "react";

export default function Examen({ engine }) {
  const { state, currentQuestion, time, setAnswer, goTo, toggleMark, finishExam } = engine;
  const [showConfirm, setShowConfirm] = useState(false);
  const [markedOnly, setMarkedOnly] = useState(false);

  if (!currentQuestion) {
    return <p className="text-sm text-slate-600">No hay preguntas disponibles para este modo.</p>;
  }

  const selected = state.answers[currentQuestion.id];
  const isPractice = state.mode === "practica";
  const showFeedback = isPractice && selected !== undefined;
  const isCorrect = selected === currentQuestion.respuesta_correcta;
  const progress = Math.round(((state.currentIndex + 1) / state.questions.length) * 100);

  const unansweredCount = state.questions.filter((q) => state.answers[q.id] === undefined).length;
  const markedCount = Object.values(state.marked).filter(Boolean).length;

  const secondsLeft = state.endAt ? Math.max(0, Math.floor((state.endAt - Date.now()) / 1000)) : null;
  const isUrgent = secondsLeft !== null && secondsLeft < 600;
  const isCritical = secondsLeft !== null && secondsLeft < 120;

  const handleFinishClick = () => setShowConfirm(true);
  const handleConfirmFinish = () => { setShowConfirm(false); finishExam(); };
  const handleCancelFinish = () => setShowConfirm(false);

  const markedQuestions = state.questions
    .map((q, idx) => ({ q, idx }))
    .filter(({ q }) => !!state.marked[q.id]);

  return (
    <section className="space-y-4 rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-brand-100 sm:p-6">
      {/* Confirm finish modal */}
      {showConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-900/60 p-4 backdrop-blur-sm"
        >
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <h2 id="confirm-title" className="font-serif text-xl text-brand-900">¿Finalizar examen?</h2>
            {unansweredCount > 0 && (
              <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
                ⚠️ Tienes <strong>{unansweredCount}</strong> pregunta{unansweredCount !== 1 ? "s" : ""} sin contestar.
              </p>
            )}
            {markedCount > 0 && (
              <p className="mt-2 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
                ⚑ Tienes <strong>{markedCount}</strong> pregunta{markedCount !== 1 ? "s" : ""} marcada{markedCount !== 1 ? "s" : ""} para repaso.
              </p>
            )}
            {unansweredCount === 0 && markedCount === 0 && (
              <p className="mt-3 text-sm text-slate-600">Has respondido todas las preguntas. ¿Confirmas que quieres terminar?</p>
            )}
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={handleCancelFinish}
                className="flex-1 rounded-lg border border-brand-300 px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50"
              >
                Continuar revisando
              </button>
              <button
                type="button"
                onClick={handleConfirmFinish}
                className="flex-1 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky header — timer always visible */}
      <header className="sticky top-10 z-30 -mx-4 flex flex-wrap items-center justify-between gap-2 rounded-none border-b border-brand-200 bg-white/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {currentQuestion.eje} · {currentQuestion.tema}
          </p>
          <p className="text-sm text-slate-600">
            Pregunta {state.currentIndex + 1} de {state.questions.length}
          </p>
        </div>
        <div
          aria-live="polite"
          className={`rounded-lg px-3 py-2 text-sm font-bold text-white transition-colors ${
            isCritical
              ? "bg-rose-600 animate-pulse"
              : isUrgent
              ? "bg-amber-600"
              : "bg-brand-900"
          }`}
        >
          {state.endAt ? `⏱ ${time}` : `Pregunta ${state.currentIndex + 1}/${state.questions.length}`}
        </div>
      </header>

      <div>
        <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-brand-800">
          <span>Progreso</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full transition-all ${
              progress < 34 ? "bg-rose-500" : progress < 67 ? "bg-amber-500" : "bg-emerald-500"
            }`}
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label="Progreso del examen"
          />
        </div>
      </div>

      <h2 className="text-lg font-semibold leading-relaxed text-ink">{currentQuestion.pregunta}</h2>

      <div className="grid gap-2">
        {currentQuestion.opciones.map((opcion, idx) => {
          const active = selected === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setAnswer(currentQuestion.id, idx)}
              className={`rounded-xl border px-3 py-3 text-left text-sm transition sm:text-base ${
                active ? "border-accent bg-rose-50" : "border-slate-300 bg-white hover:bg-slate-50"
              }`}
              aria-pressed={active}
            >
              <span className="font-bold">{String.fromCharCode(65 + idx)}.</span> {opcion}
            </button>
          );
        })}
      </div>

      {showFeedback ? (
        <div className={`rounded-xl p-3 text-sm ${isCorrect ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-900"}`}>
          <p className="font-semibold">{isCorrect ? "Respuesta correcta" : "Respuesta incorrecta"}</p>
          <p className="mt-1">{currentQuestion.justificacion}</p>
        </div>
      ) : null}

      <footer className="sticky bottom-2 z-10 -mx-2 flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-white/95 px-2 py-2 backdrop-blur sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0">
        <button
          type="button"
          onClick={() => goTo(state.currentIndex - 1)}
          disabled={state.currentIndex === 0}
          aria-label="Ir a la pregunta anterior"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold disabled:opacity-40"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={() => goTo(state.currentIndex + 1)}
          disabled={state.currentIndex >= state.questions.length - 1}
          aria-label="Ir a la pregunta siguiente"
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold disabled:opacity-40"
        >
          Siguiente
        </button>
        <button
          type="button"
          onClick={() => toggleMark(currentQuestion.id)}
          aria-label={state.marked[currentQuestion.id] ? "Quitar estado pendiente para repaso" : "Marcar como pendiente para repaso"}
          className="rounded-lg border border-brand-400 px-3 py-2 text-sm font-semibold text-brand-800"
        >
          {state.marked[currentQuestion.id] ? "Quitar pendiente" : "Pendiente para repaso"}
        </button>
        <button
          type="button"
          onClick={handleFinishClick}
          aria-label="Finalizar examen y ver resultados"
          className="ml-auto rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white"
        >
          Finalizar
        </button>
      </footer>

      <details className="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <summary className="cursor-pointer text-sm font-semibold text-brand-900">Mapa de preguntas</summary>
        <p className="mt-2 text-xs text-slate-600">Azul: actual · Gris oscuro: respondida · Marca: pregunta marcada</p>

        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMarkedOnly((v) => !v)}
            aria-pressed={markedOnly}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              markedOnly
                ? "bg-brand-700 text-white"
                : "border border-brand-300 bg-white text-brand-800 hover:bg-brand-50"
            }`}
          >
            ⚑ Solo pendientes {markedOnly && markedQuestions.length > 0 ? `(${markedQuestions.length})` : ""}
          </button>
          {markedOnly && markedQuestions.length === 0 && (
            <span className="text-xs text-slate-500">Sin preguntas marcadas</span>
          )}
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-8">
          {(markedOnly ? markedQuestions : state.questions.map((q, idx) => ({ q, idx }))).map(({ q, idx: index }) => {
            const isCurrent = index === state.currentIndex;
            const isAnswered = state.answers[q.id] !== undefined;
            const isMarked = !!state.marked[q.id];

            let colorClass = "border-slate-300 bg-white text-slate-700";
            if (isAnswered) {
              colorClass = "border-slate-500 bg-slate-600 text-white";
            }
            if (isCurrent) {
              colorClass = "border-brand-700 bg-brand-700 text-white";
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir a pregunta ${index + 1}${isMarked ? ", marcada para revision" : ""}`}
                className={`relative rounded-lg border px-2 py-2 text-xs font-bold ${colorClass}`}
              >
                {index + 1}
                {isMarked ? <span aria-hidden="true" className="ml-1 text-[10px]">⚑</span> : null}
              </button>
            );
          })}
        </div>
      </details>
    </section>
  );
}
