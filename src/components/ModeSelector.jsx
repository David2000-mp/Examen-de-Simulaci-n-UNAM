import { useNavigate } from "react-router-dom";
import { axes } from "../utils/analisis";

export default function ModeSelector({ onStart }) {
  const navigate = useNavigate();
  return (
    <section className="motion-fade-scale rounded-2xl bg-white/90 p-5 shadow-lg ring-1 ring-brand-100 sm:p-8">
      <h2 className="font-serif text-2xl text-brand-800">Elige tu modalidad</h2>
      <p className="mt-2 text-sm text-slate-600">
        Simulacro General para examen completo o Examen por Eje para reforzar un area.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="motion-lift motion-press rounded-xl bg-brand-700 px-4 py-3 text-left font-semibold text-white transition hover:bg-brand-800"
          onClick={() => onStart({ mode: "simulacro", axis: "General" })}
        >
          Simulacro General
        </button>

        <button
          type="button"
          className="motion-lift motion-press rounded-xl bg-accent px-4 py-3 text-left font-semibold text-white transition hover:brightness-95"
          onClick={() => onStart({ mode: "practica", axis: "General" })}
        >
          Modo Practica (feedback inmediato)
        </button>
      </div>

      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-brand-900">Examen por Eje</p>
        <div className="grid gap-2 sm:grid-cols-3">
          {axes.map((axis) => (
            <button
              key={axis}
              type="button"
              className="motion-lift motion-press rounded-xl border border-brand-300 bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-900 hover:bg-brand-100"
              onClick={() => onStart({ mode: "eje", axis })}
            >
              {axis}
            </button>
          ))}
        </div>
      </div>

      <div className="motion-rise mt-6 rounded-xl border border-brand-200 bg-brand-50/60 p-4">
        <p className="text-sm font-semibold text-brand-900">Guía de Estudio — 100 Conceptos Clave</p>
        <p className="mt-1 text-xs text-slate-600">
          20 Historia · 45 Metodología · 35 Teoría Social. Búsqueda rápida, filtros por eje y seguimiento de tu repaso.
        </p>
        <button
          type="button"
          onClick={() => navigate("/guia")}
          className="motion-lift motion-press mt-3 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800"
          aria-label="Abrir guía de estudio interactiva de 100 conceptos"
        >
          Abrir Guía de Estudio
        </button>
      </div>
    </section>
  );
}
