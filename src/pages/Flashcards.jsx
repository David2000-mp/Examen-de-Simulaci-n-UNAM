import { useEffect, useMemo, useState } from "react";
import flashcardsActiveRecall from "../data/flashcardsActiveRecall";
import guiaData from "../data/guia.json";

const AXES = ["Todos", "Historia", "Metodología", "Teoría Social"];
const ACTIVE_RECALL_STORAGE_KEY = "flashcards:active-recall:mastered:v1";
const MODES = [
  { id: "active-recall", label: "Active Recall" },
  { id: "conceptos", label: "Conceptos" }
];

const AXIS_COLOR = {
  Historia:       { bg: "bg-brand-700",   text: "text-white" },
  "Metodología":  { bg: "bg-rose-600",    text: "text-white" },
  "Teoría Social":{ bg: "bg-amber-600",   text: "text-white" },
};

function renderBold(text) {
  if (!text) return null;
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="font-semibold">{part}</strong>
      : part
  );
}

export default function Flashcards() {
  const [studyMode, setStudyMode] = useState("active-recall");
  const [masteredById, setMasteredById] = useState({});
  const [axisFilter, setAxisFilter] = useState("Todos");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const isActiveRecall = studyMode === "active-recall";
  const sourceData = studyMode === "active-recall" ? flashcardsActiveRecall : guiaData;
  const [order, setOrder] = useState(() => sourceData.map((_, i) => i));

  const filtered = useMemo(() => {
    const baseRows = sourceData.map((item, i) => ({ concept: item, originalIdx: i }));
    const base = axisFilter === "Todos"
      ? baseRows
      : baseRows.filter(({ concept }) => concept.eje === axisFilter);
    return base;
  }, [axisFilter, sourceData]);

  const orderedFiltered = useMemo(() => {
    if (!isRandom) return filtered;
    // stable shuffle keyed by order array
    return [...filtered].sort((a, b) => order.indexOf(a.originalIdx) - order.indexOf(b.originalIdx));
  }, [filtered, isRandom, order]);

  const safeIndex = Math.min(index, orderedFiltered.length - 1);
  const current = orderedFiltered[safeIndex];

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(ACTIVE_RECALL_STORAGE_KEY);
      if (!raw) return;
      const ids = JSON.parse(raw);
      if (!Array.isArray(ids)) return;

      const mapped = ids.reduce((acc, id) => {
        if (typeof id === "string") acc[id] = true;
        return acc;
      }, {});

      setMasteredById(mapped);
    } catch {
      setMasteredById({});
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = Object.keys(masteredById).filter((id) => masteredById[id]);
    window.localStorage.setItem(ACTIVE_RECALL_STORAGE_KEY, JSON.stringify(ids));
  }, [masteredById]);

  useEffect(() => {
    const handler = (e) => {
      const target = e.target;
      if (
        typeof window !== "undefined" &&
        target instanceof window.HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        setIndex((i) => Math.min(orderedFiltered.length - 1, i + 1));
        setFlipped(false);
      } else if (e.key === "ArrowLeft") {
        setIndex((i) => Math.max(0, i - 1));
        setFlipped(false);
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (isActiveRecall && (e.key === "m" || e.key === "M")) {
        const currentId = current?.concept?.id;
        if (!currentId) return;
        setMasteredById((prev) => ({ ...prev, [currentId]: !prev[currentId] }));
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [orderedFiltered.length, isActiveRecall, current]);

  const activeRecallMetrics = useMemo(() => {
    const byAxis = {
      Historia: { total: 0, mastered: 0 },
      "Metodología": { total: 0, mastered: 0 },
      "Teoría Social": { total: 0, mastered: 0 },
    };

    let total = 0;
    let mastered = 0;

    flashcardsActiveRecall.forEach((card) => {
      total += 1;
      if (byAxis[card.eje]) byAxis[card.eje].total += 1;

      if (masteredById[card.id]) {
        mastered += 1;
        if (byAxis[card.eje]) byAxis[card.eje].mastered += 1;
      }
    });

    const filteredTotal = orderedFiltered.length;
    const filteredMastered = isActiveRecall
      ? orderedFiltered.reduce((acc, row) => acc + (masteredById[row.concept.id] ? 1 : 0), 0)
      : 0;

    return {
      total,
      mastered,
      pct: total ? Math.round((mastered / total) * 100) : 0,
      filteredTotal,
      filteredMastered,
      filteredPct: filteredTotal ? Math.round((filteredMastered / filteredTotal) * 100) : 0,
      byAxis,
    };
  }, [masteredById, orderedFiltered, isActiveRecall]);

  const toggleCurrentMastered = () => {
    if (!isActiveRecall || !current?.concept?.id) return;
    const currentId = current.concept.id;
    setMasteredById((prev) => ({ ...prev, [currentId]: !prev[currentId] }));
  };

  const resetMastery = () => {
    setMasteredById({});
  };

  const handleAxis = (axis) => {
    setAxisFilter(axis);
    setIndex(0);
    setFlipped(false);
  };

  const handleMode = (mode) => {
    setStudyMode(mode);
    setOrder((mode === "active-recall" ? flashcardsActiveRecall : guiaData).map((_, i) => i));
    setAxisFilter("Todos");
    setIndex(0);
    setFlipped(false);
    setIsRandom(false);
  };

  const handlePrev = () => { setIndex((i) => Math.max(0, i - 1)); setFlipped(false); };
  const handleNext = () => { setIndex((i) => Math.min(orderedFiltered.length - 1, i + 1)); setFlipped(false); };
  const handleFlip = () => setFlipped((f) => !f);

  const handleShuffle = () => {
    const shuffled = [...sourceData.map((_, i) => i)];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setOrder(shuffled);
    setIsRandom(true);
    setIndex(0);
    setFlipped(false);
  };

  const handleSequential = () => {
    setOrder(sourceData.map((_, i) => i));
    setIsRandom(false);
    setIndex(0);
    setFlipped(false);
  };

  if (!current) {
    return (
      <main className="container-shell">
        <p className="text-sm text-slate-500">No hay tarjetas para este filtro.</p>
      </main>
    );
  }

  const { concept } = current;
  const isCurrentMastered = isActiveRecall ? Boolean(masteredById[concept.id]) : false;
  const axisColors = AXIS_COLOR[concept.eje] || { bg: "bg-brand-700", text: "text-white" };

  return (
    <main className="container-shell space-y-5">
      <header className="rounded-2xl bg-brand-900 p-6 text-white shadow-xl">
        <h1 className="font-serif text-2xl">Flashcards — {studyMode === "active-recall" ? "Active Recall" : "100 Conceptos"}</h1>
        <p className="mt-1 text-sm text-brand-100">
          {studyMode === "active-recall"
            ? "Las tres areas ya estan reescritas como evocacion directa, inversion y tarjetas derivadas de alertas de examen."
            : "Voltea cada tarjeta para ver la síntesis, referencia y alerta de examen."}
        </p>
        {studyMode === "active-recall" && (
          <p className="mt-2 text-xs text-brand-200">
            Cobertura completa: Historia, Metodología y Teoría Social.
          </p>
        )}
      </header>

      {isActiveRecall && (
        <section className="space-y-3 rounded-2xl border border-brand-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold text-brand-900">
              Dominadas: {activeRecallMetrics.mastered}/{activeRecallMetrics.total} ({activeRecallMetrics.pct}%)
            </p>
            <p className="text-xs text-slate-500">
              Filtro actual: {activeRecallMetrics.filteredMastered}/{activeRecallMetrics.filteredTotal} ({activeRecallMetrics.filteredPct}%)
            </p>
            <button
              type="button"
              onClick={resetMastery}
              className="ml-auto rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Reiniciar progreso
            </button>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-brand-100">
            <div
              className="h-full rounded-full bg-brand-700 transition-all"
              style={{ width: `${activeRecallMetrics.pct}%` }}
            />
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {Object.entries(activeRecallMetrics.byAxis).map(([axis, stats]) => {
              const pct = stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0;
              return (
                <div key={axis} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{axis}</p>
                  <p className="mt-1 text-sm font-bold text-brand-900">
                    {stats.mastered}/{stats.total} ({pct}%)
                  </p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-brand-700" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-2">
        {MODES.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => handleMode(mode.id)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              studyMode === mode.id
                ? "bg-brand-700 text-white"
                : "border border-brand-300 bg-white text-brand-900 hover:bg-brand-50"
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        {AXES.map((axis) => (
          <button
            key={axis}
            type="button"
            onClick={() => handleAxis(axis)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              axisFilter === axis
                ? "bg-brand-700 text-white"
                : "border border-brand-300 bg-brand-50 text-brand-900 hover:bg-brand-100"
            }`}
          >
            {axis}
          </button>
        ))}
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={isRandom ? handleSequential : handleShuffle}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              isRandom
                ? "bg-amber-500 text-white"
                : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
            aria-label={isRandom ? "Volver a orden secuencial" : "Activar modo aleatorio"}
          >
            {isRandom ? "Orden original" : "Aleatorio"}
          </button>
        </div>
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-slate-500">
        Tarjeta <strong className="text-brand-900">{safeIndex + 1}</strong> de{" "}
        <strong className="text-brand-900">{orderedFiltered.length}</strong>
        {axisFilter !== "Todos" && <span className="ml-1 text-slate-400">· {axisFilter}</span>}
        {isActiveRecall && (
          <span className="ml-1 text-slate-400">· {isCurrentMastered ? "Dominada" : "Pendiente"}</span>
        )}
      </p>

      {/* Flashcard */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleFlip}
        onKeyDown={(e) => e.key === "Enter" && handleFlip()}
        aria-label={flipped ? "Tarjeta volteada — ver frente" : "Tarjeta — pulsa para voltear"}
        className="cursor-pointer select-none"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative min-h-72 w-full rounded-2xl shadow-xl transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white p-8 ring-1 ring-brand-100"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className={`mb-4 rounded-lg px-3 py-1 text-xs font-bold ${axisColors.bg} ${axisColors.text}`}>
              {concept.eje} · #{concept.sourceId ?? concept.id}
            </span>
            {studyMode === "active-recall" ? (
              <>
                <p className="mb-2 rounded-full bg-brand-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                  {concept.kind === "direct" ? "Directa" : concept.kind === "inverse" ? "Inversa" : "Alerta"}
                </p>
                <h2 className="text-center text-xl font-semibold leading-relaxed text-brand-900">{concept.prompt}</h2>
              </>
            ) : (
              <h2 className="text-center font-serif text-2xl text-brand-900">{concept.titulo}</h2>
            )}
            <p className="mt-6 text-xs text-slate-400">Pulsa para voltear</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl bg-brand-900 p-6 text-white"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className={`mb-3 w-fit rounded-lg px-3 py-1 text-xs font-bold ${axisColors.bg} ${axisColors.text}`}>
              {concept.eje} · #{concept.sourceId ?? concept.id}
            </span>
            {studyMode === "active-recall" ? (
              <>
                <h3 className="mb-3 font-serif text-lg">{concept.answer}</h3>
                {concept.note ? (
                  <div className="mb-3 rounded-lg bg-brand-800 p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-300">Precisión</p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-100">{concept.note}</p>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <h3 className="mb-3 font-serif text-lg">{concept.titulo}</h3>

                <div className="mb-3 rounded-lg bg-brand-800 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-300">Concepto Central</p>
                  <p className="mt-1 text-sm text-brand-100">{concept.conceptoCentral}</p>
                </div>

                <div className="mb-3 rounded-lg bg-brand-800 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-300">Síntesis</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-100">{renderBold(concept.sintesisDidactica)}</p>
                </div>

                <div className="mb-3 flex gap-2">
                  <div className="flex-1 rounded-lg bg-amber-900/60 p-2">
                    <p className="text-xs font-bold text-amber-300">Pág.</p>
                    <p className="mt-0.5 text-xs text-amber-100">{concept.referenciaPagina}</p>
                  </div>
                  <div className="flex-1 rounded-lg bg-rose-900/60 p-2">
                    <p className="text-xs font-bold text-rose-300">Alerta</p>
                    <p className="mt-0.5 text-xs text-rose-100">{concept.alertaExamen}</p>
                  </div>
                </div>
              </>
            )}

            <p className="mt-auto text-center text-xs text-brand-400">Pulsa para voltear</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          disabled={safeIndex === 0}
          aria-label="Tarjeta anterior"
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
        >
          ← Anterior
        </button>
        <button
          type="button"
          onClick={handleFlip}
          className="rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white"
          aria-label="Voltear tarjeta"
        >
          Voltear
        </button>
        {isActiveRecall && (
          <button
            type="button"
            onClick={toggleCurrentMastered}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white ${
              isCurrentMastered ? "bg-emerald-600" : "bg-slate-700"
            }`}
            aria-label={isCurrentMastered ? "Marcar como pendiente" : "Marcar como dominada"}
          >
            {isCurrentMastered ? "Dominada ✓" : "Marcar dominada"}
          </button>
        )}
        <button
          type="button"
          onClick={handleNext}
          disabled={safeIndex === orderedFiltered.length - 1}
          aria-label="Tarjeta siguiente"
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
        >
          Siguiente →
        </button>
      </div>
    </main>
  );
}
