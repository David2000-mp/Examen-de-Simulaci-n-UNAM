import { useMemo, useState } from "react";
import guiaData from "../data/guia.json";

const STORAGE_KEY = "guia:revisados";
const AXES = ["Historia", "Metodología", "Teoría Social"];

const AXIS_BADGE = {
  Historia: "bg-brand-700 text-white",
  "Metodología": "bg-accent text-white",
  "Teoría Social": "bg-amber-600 text-white",
};

const AXIS_BORDER = {
  Historia: "border-brand-300",
  "Metodología": "border-rose-200",
  "Teoría Social": "border-amber-200",
};

function loadRevisados() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveRevisados(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

function renderBold(text) {
  if (!text) return null;
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="font-semibold text-brand-900">{part}</strong>
      : part
  );
}

export default function GuiaEstudio() {
  const [query, setQuery] = useState("");
  const [axisFilter, setAxisFilter] = useState("Todos");
  const [expanded, setExpanded] = useState(new Set());
  const [revisados, setRevisados] = useState(loadRevisados);

  const toggleExpanded = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleRevisado = (id) => {
    setRevisados((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveRevisados(next);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return guiaData.filter((c) => {
      if (axisFilter !== "Todos" && c.eje !== axisFilter) return false;
      if (!q) return true;
      return (
        c.titulo.toLowerCase().includes(q) ||
        c.conceptoCentral.toLowerCase().includes(q) ||
        c.sintesisDidactica.toLowerCase().includes(q) ||
        c.alertaExamen.toLowerCase().includes(q)
      );
    });
  }, [query, axisFilter]);

  const byAxis = useMemo(
    () =>
      AXES.map((axis) => ({
        axis,
        total: guiaData.filter((c) => c.eje === axis).length,
        done: guiaData.filter((c) => c.eje === axis && revisados.has(c.id)).length,
      })),
    [revisados]
  );

  const totalRevisados = revisados.size;

  return (
    <main className="container-shell space-y-5">
      <header className="motion-rise motion-stagger rounded-2xl bg-brand-900 p-6 text-white shadow-xl" style={{ "--motion-index": 0 }}>
        <h1 className="font-serif text-2xl">Guía de Estudio — 100 Conceptos Clave</h1>
        <p className="mt-1 text-sm text-brand-100">
          Historia · Metodología · Teoría Social
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-700 px-3 py-1 text-sm font-bold">
            {totalRevisados}/100 revisados
          </span>
          {totalRevisados > 0 && (
            <div className="h-2 w-32 overflow-hidden rounded-full bg-brand-800">
              <div
                className="h-full rounded-full bg-emerald-400 transition-all"
                style={{ width: `${totalRevisados}%` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={totalRevisados}
                aria-label="Progreso total de revisión"
              />
            </div>
          )}
        </div>
      </header>

      {/* Progress by axis */}
      <div className="grid gap-3 sm:grid-cols-3">
        {byAxis.map(({ axis, total, done }) => (
          <div key={axis} className="motion-rise motion-stagger rounded-xl bg-white/90 p-3 shadow ring-1 ring-brand-100" style={{ "--motion-index": 1 }}>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{axis}</p>
            <p className="mt-1 text-xl font-bold text-brand-900">
              {done}
              <span className="text-sm font-normal text-slate-500">/{total}</span>
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${total ? Math.round((done / total) * 100) : 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Search + filter bar */}
      <div className="motion-rise motion-stagger space-y-3 rounded-2xl bg-white/90 p-4 shadow ring-1 ring-brand-100" style={{ "--motion-index": 2 }}>
        <input
          type="search"
          placeholder="Buscar por concepto, autor, tema, alerta de examen…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Buscar en la guía de estudio"
          className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
        <div className="flex flex-wrap gap-2">
          {["Todos", ...AXES].map((axis) => (
            <button
              key={axis}
              type="button"
              onClick={() => setAxisFilter(axis)}
              className={`motion-lift motion-press rounded-full px-3 py-1 text-xs font-semibold transition ${
                axisFilter === axis
                  ? "bg-brand-700 text-white"
                  : "border border-brand-300 bg-brand-50 text-brand-900 hover:bg-brand-100"
              }`}
            >
              {axis}
            </button>
          ))}
          {(query || axisFilter !== "Todos") && (
            <button
              type="button"
              onClick={() => { setQuery(""); setAxisFilter("Todos"); }}
              className="motion-lift motion-press rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Limpiar
            </button>
          )}
        </div>
        <p className="text-xs text-slate-500">
          {filtered.length} concepto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Concept list */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <p className="rounded-xl bg-slate-50 p-8 text-center text-sm text-slate-500">
            No se encontraron conceptos con esos criterios.
          </p>
        ) : (
          filtered.map((concept) => {
            const isExpanded = expanded.has(concept.id);
            const isRevisado = revisados.has(concept.id);

            return (
              <article
                key={concept.id}
                className={`motion-fade-scale rounded-xl border bg-white shadow-sm ${AXIS_BORDER[concept.eje]}`}
              >
                {/* Card header — always visible, click to expand */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleExpanded(concept.id)}
                  onKeyDown={(e) => e.key === "Enter" && toggleExpanded(concept.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`concept-body-${concept.id}`}
                  className="flex cursor-pointer items-start gap-3 p-4"
                >
                  <span
                    className={`mt-0.5 shrink-0 rounded-lg px-2 py-1 text-xs font-bold ${AXIS_BADGE[concept.eje]}`}
                  >
                    {concept.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-semibold leading-snug ${
                        isRevisado ? "text-slate-400 line-through" : "text-ink"
                      }`}
                    >
                      {concept.titulo}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{concept.eje}</p>
                  </div>
                  <span className="ml-2 shrink-0 text-xs text-slate-400" aria-hidden="true">
                    {isExpanded ? "▲" : "▼"}
                  </span>
                </div>

                {/* Expanded body */}
                {isExpanded && (
                  <div
                    id={`concept-body-${concept.id}`}
                    className="space-y-3 border-t border-slate-100 px-4 pb-4 pt-3"
                  >
                    <div className="rounded-lg bg-brand-50 p-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                        Concepto Central
                      </p>
                      <p className="mt-1 text-sm text-brand-900">{concept.conceptoCentral}</p>
                    </div>

                    <div className="rounded-lg bg-slate-50 p-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
                        Síntesis Didáctica
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-800">
                        {renderBold(concept.sintesisDidactica)}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50 p-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                          Referencia de Página
                        </p>
                        <p className="mt-1 text-xs text-amber-900">{concept.referenciaPagina}</p>
                      </div>
                      <div className="flex-1 rounded-lg border border-rose-200 bg-rose-50 p-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-rose-700">
                          Alerta de Examen
                        </p>
                        <p className="mt-1 text-xs text-rose-900">{concept.alertaExamen}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); toggleRevisado(concept.id); }}
                      aria-pressed={isRevisado}
                      aria-label={
                        isRevisado
                          ? `Desmarcar concepto ${concept.id} como revisado`
                          : `Marcar concepto ${concept.id} como revisado`
                      }
                      className={`motion-lift motion-press w-full rounded-lg border py-2 text-xs font-semibold transition ${
                        isRevisado
                          ? "border-emerald-400 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                          : "border-brand-300 bg-brand-50 text-brand-800 hover:bg-brand-100"
                      }`}
                    >
                      {isRevisado ? "✓ Revisado — clic para desmarcar" : "Marcar como revisado"}
                    </button>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </main>
  );
}
