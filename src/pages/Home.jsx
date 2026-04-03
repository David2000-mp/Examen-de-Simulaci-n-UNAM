import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ModeSelector from "../components/ModeSelector";
import { useExamContext } from "../state/ExamProvider";

export default function Home() {
  const navigate = useNavigate();
  const { engine, dataErrors, loading, loadError } = useExamContext();

  const hasSession = useMemo(
    () => engine.state.status === "running" && engine.state.questions.length > 0,
    [engine.state.status, engine.state.questions.length]
  );

  useEffect(() => {
    if (engine.state.status === "finished") {
      navigate("/results");
    }
  }, [engine.state.status, navigate]);

  const handleStart = (payload) => {
    engine.startExam(payload);
    navigate("/exam");
  };

  if (loading) {
    return (
      <main className="container-shell">
        <section className="rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-brand-100">
          <p className="text-sm text-slate-700">Cargando banco de preguntas...</p>
        </section>
      </main>
    );
  }

  return (
    <main className="container-shell space-y-5">
      <header className="motion-rise motion-stagger rounded-2xl bg-brand-900 p-6 text-white shadow-xl" style={{ "--motion-index": 0 }}>
        <p className="text-xs uppercase tracking-widest text-brand-200">UNAM · Trabajo Social</p>
        <h1 className="mt-2 font-serif text-3xl">Simulador de examen de maestria de gatisifu</h1>
        <p className="mt-2 max-w-2xl text-sm text-brand-100">
          Entrena en modo examen real (120 minutos), por eje tematico o practica guiada con retroalimentacion inmediata.
        </p>
      </header>

      {hasSession ? (
        <div className="motion-rise motion-stagger rounded-xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200" style={{ "--motion-index": 1 }}>
          Tienes una sesion en curso. Puedes continuarla y mantener tu progreso guardado localmente.
          <button
            type="button"
            className="motion-lift motion-press ml-3 rounded bg-amber-600 px-3 py-1 font-semibold text-white"
            onClick={() => navigate("/exam")}
          >
            Continuar
          </button>
        </div>
      ) : null}

      {!hasSession && engine.progress?.totalSessions > 0 && (
        <div className="motion-rise motion-stagger rounded-xl border border-brand-200 bg-brand-50/80 p-4 ring-1 ring-brand-100" style={{ "--motion-index": 1 }}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-700">Tu progreso historico</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span>
              <strong className="text-brand-900">{engine.progress.totalSessions}</strong>
              <span className="ml-1 text-slate-600">sesiones completadas</span>
            </span>
            <span>
              Mejor global:{" "}
              <strong className="text-emerald-700">{engine.progress.bestScores.overall}%</strong>
            </span>
            {["Historia", "Metodología", "Teoría Social"].map((axis) => (
              <span key={axis}>
                {axis}:{" "}
                <strong className="text-brand-800">{engine.progress.bestScores[axis]}%</strong>
              </span>
            ))}
          </div>
          {(() => {
            try {
              const raw = localStorage.getItem("guia:revisados");
              const count = raw ? JSON.parse(raw).length : 0;
              if (count === 0) return null;
              return (
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xs text-slate-600">
                    Guía: <strong className="text-brand-800">{count}/100</strong> conceptos revisados
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-brand-500 transition-all"
                      style={{ width: `${count}%` }}
                    />
                  </div>
                </div>
              );
            } catch {
              return null;
            }
          })()}
        </div>
      )}

      {dataErrors.length ? (
        <div className="motion-rise motion-stagger rounded-xl bg-rose-50 p-4 text-sm text-rose-900 ring-1 ring-rose-200" style={{ "--motion-index": 2 }}>
          Se detectaron incidencias en el banco de preguntas: {dataErrors.join(" | ")}
        </div>
      ) : null}

      {loadError ? (
        <div
          role="alert"
          aria-live="assertive"
          className="motion-rise motion-stagger rounded-xl border border-rose-300 bg-rose-100 p-4 text-sm text-rose-950 shadow-sm"
          style={{ "--motion-index": 2 }}
        >
          <p className="font-semibold">Error de carga</p>
          <p className="mt-1">{loadError}</p>
        </div>
      ) : null}

      <div className="motion-rise motion-stagger" style={{ "--motion-index": 3 }}>
        <ModeSelector onStart={handleStart} />
      </div>
    </main>
  );
}
