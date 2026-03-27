import RadarByAxis from "./charts/RadarByAxis";

export default function Dashboard({ stats, onRestart, onRetryErrors, onDownloadGuide }) {
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
        <RadarByAxis axisScores={stats.axisScores} />
      </div>

      <div className="space-y-3 rounded-xl border border-brand-200 bg-brand-50/70 p-4">
        <h3 className="text-lg font-semibold text-brand-900">Analisis de Brechas</h3>
        <p className="text-sm text-slate-700">
          Refuerza primero el eje con menor puntaje y enfocate en los errores con mayor impacto.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onRetryErrors}
            disabled={!stats.trainingAvailable}
            aria-label="Reintentar solamente las preguntas incorrectas"
            className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reintentar solo errores
          </button>
          <button
            type="button"
            onClick={onDownloadGuide}
            disabled={!orderedErrors.length}
            aria-label="Descargar guia de estudio personalizada en formato Markdown"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Descargar Guia de Estudio (.md)
          </button>
        </div>
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

      <button
        type="button"
        onClick={onRestart}
        className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white"
      >
        Reiniciar simulador
      </button>
    </section>
  );
}
