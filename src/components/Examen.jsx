export default function Examen({ engine }) {
  const { state, currentQuestion, time, setAnswer, goTo, toggleMark, finishExam } = engine;

  if (!currentQuestion) {
    return <p className="text-sm text-slate-600">No hay preguntas disponibles para este modo.</p>;
  }

  const selected = state.answers[currentQuestion.id];
  const isPractice = state.mode === "practica";
  const showFeedback = isPractice && selected !== undefined;
  const isCorrect = selected === currentQuestion.respuesta_correcta;
  const progress = Math.round(((state.currentIndex + 1) / state.questions.length) * 100);

  return (
    <section className="space-y-4 rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-brand-100 sm:p-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {currentQuestion.eje} · {currentQuestion.tema}
          </p>
          <p className="text-sm text-slate-600">
            Pregunta {state.currentIndex + 1} de {state.questions.length}
          </p>
        </div>
        <div aria-live="polite" className="rounded-lg bg-brand-900 px-3 py-2 text-sm font-bold text-white">
          Tiempo: {time}
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
          onClick={finishExam}
          aria-label="Finalizar examen y ver resultados"
          className="ml-auto rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white"
        >
          Finalizar
        </button>
      </footer>

      <details className="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <summary className="cursor-pointer text-sm font-semibold text-brand-900">Mapa de preguntas</summary>
        <p className="mt-2 text-xs text-slate-600">Azul: actual · Gris oscuro: respondida · Marca: pregunta marcada</p>
        <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-8">
          {state.questions.map((q, index) => {
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
