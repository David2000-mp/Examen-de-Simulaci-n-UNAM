import { useMemo, useState } from "react";
import guiaData from "../data/guia.json";

const AXES = ["Todos", "Historia", "Metodología", "Teoría Social"];

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
  const [axisFilter, setAxisFilter] = useState("Todos");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [order, setOrder] = useState(() => guiaData.map((_, i) => i));

  const filtered = useMemo(() => {
    const base = axisFilter === "Todos"
      ? guiaData.map((c, i) => ({ concept: c, originalIdx: i }))
      : guiaData.map((c, i) => ({ concept: c, originalIdx: i })).filter(({ concept }) => concept.eje === axisFilter);
    return base;
  }, [axisFilter]);

  const orderedFiltered = useMemo(() => {
    if (!isRandom) return filtered;
    // stable shuffle keyed by order array
    return [...filtered].sort((a, b) => order.indexOf(a.originalIdx) - order.indexOf(b.originalIdx));
  }, [filtered, isRandom, order]);

  const safeIndex = Math.min(index, orderedFiltered.length - 1);
  const current = orderedFiltered[safeIndex];

  const handleAxis = (axis) => {
    setAxisFilter(axis);
    setIndex(0);
    setFlipped(false);
  };

  const handlePrev = () => { setIndex((i) => Math.max(0, i - 1)); setFlipped(false); };
  const handleNext = () => { setIndex((i) => Math.min(orderedFiltered.length - 1, i + 1)); setFlipped(false); };
  const handleFlip = () => setFlipped((f) => !f);

  const handleShuffle = () => {
    const shuffled = [...guiaData.map((_, i) => i)];
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
    setOrder(guiaData.map((_, i) => i));
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
  const axisColors = AXIS_COLOR[concept.eje] || { bg: "bg-brand-700", text: "text-white" };

  return (
    <main className="container-shell space-y-5">
      <header className="rounded-2xl bg-brand-900 p-6 text-white shadow-xl">
        <h1 className="font-serif text-2xl">Flashcards — 100 Conceptos</h1>
        <p className="mt-1 text-sm text-brand-100">
          Voltea cada tarjeta para ver la síntesis, referencia y alerta de examen.
        </p>
      </header>

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
            aria-label={isRandom ? "Volver a orden secuencial" : "Modo aleatorio"}
          >
            {isRandom ? "🔀 Aleatorio" : "🔀 Aleatorio"}
          </button>
        </div>
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-slate-500">
        Tarjeta <strong className="text-brand-900">{safeIndex + 1}</strong> de{" "}
        <strong className="text-brand-900">{orderedFiltered.length}</strong>
        {axisFilter !== "Todos" && <span className="ml-1 text-slate-400">· {axisFilter}</span>}
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
              {concept.eje} · #{concept.id}
            </span>
            <h2 className="text-center font-serif text-2xl text-brand-900">{concept.titulo}</h2>
            <p className="mt-6 text-xs text-slate-400">Pulsa para voltear</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl bg-brand-900 p-6 text-white"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className={`mb-3 w-fit rounded-lg px-3 py-1 text-xs font-bold ${axisColors.bg} ${axisColors.text}`}>
              {concept.eje} · #{concept.id}
            </span>
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
