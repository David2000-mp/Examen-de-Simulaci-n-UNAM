import { useEffect, useMemo, useRef, useState } from "react";
import flashcardsActiveRecall from "../data/flashcardsActiveRecall";
import flashcardsPersonalizadas from "../data/flashcardsPersonalizadas";
import guiaData from "../data/guia.json";

const AXES = ["Todos", "Historia", "Metodología", "Teoría", "Teoría Social"];
const ACTIVE_RECALL_STORAGE_KEY = "flashcards:active-recall:mastered:v1";
const PERSONALIZADAS_STORAGE_KEY = "flashcards:personalizadas:mastered:v1";
const COMBINED_TEAM_STORAGE_KEY = "flashcards:team-study:mastered:v1";
const TEAM_STUDY_DECK = [...flashcardsActiveRecall, ...flashcardsPersonalizadas];
const MODES = [
  { id: "personalizadas", label: "Aprendizaje en equipo" },
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
  const [studyMode, setStudyMode] = useState("personalizadas");
  const [masteredTeamById, setMasteredTeamById] = useState({});
  const [axisFilter, setAxisFilter] = useState("Todos");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState("");
  const isTeamMode = studyMode === "personalizadas";
  const sourceData = isTeamMode ? TEAM_STUDY_DECK : guiaData;
  const [order, setOrder] = useState(() => sourceData.map((_, i) => i));
  const [queue, setQueue] = useState([]);
  const [queueIdx, setQueueIdx] = useState(0);
  const masteredTeamRef = useRef({});
  masteredTeamRef.current = masteredTeamById;

  const filtered = useMemo(() => {
    const baseRows = sourceData.map((item, i) => ({ concept: item, originalIdx: i }));
    const base = axisFilter === "Todos"
      ? baseRows
      : baseRows.filter(({ concept }) => {
          if (axisFilter === "Teoría" || axisFilter === "Teoría Social") {
            return concept.eje === "Teoría" || concept.eje === "Teoría Social";
          }
          return concept.eje === axisFilter;
        });
    return base;
  }, [axisFilter, sourceData]);

  const orderedFiltered = useMemo(() => {
    if (!isRandom) return filtered;
    // stable shuffle keyed by order array
    return [...filtered].sort((a, b) => order.indexOf(a.originalIdx) - order.indexOf(b.originalIdx));
  }, [filtered, isRandom, order]);

  const safeIndex = Math.min(index, orderedFiltered.length - 1);
  const current = useMemo(() => {
    if (isTeamMode) {
      return queue.length > 0 && queueIdx < queue.length
        ? { concept: sourceData[queue[queueIdx]], originalIdx: queue[queueIdx] }
        : null;
    }

    return orderedFiltered[safeIndex];
  }, [isTeamMode, orderedFiltered, queue, queueIdx, safeIndex, sourceData]);

  const selectableCards = useMemo(() => {
    if (isTeamMode) {
      return queue.slice(queueIdx).map((originalIdx, offset) => {
        const concept = sourceData[originalIdx];
        return {
          concept,
          targetIndex: queueIdx + offset,
        };
      }).filter(({ concept }) => Boolean(concept));
    }

    return orderedFiltered.map(({ concept }, position) => ({
      concept,
      targetIndex: position,
    }));
  }, [isTeamMode, orderedFiltered, queue, queueIdx, sourceData]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedCombined = window.localStorage.getItem(COMBINED_TEAM_STORAGE_KEY);
      const raw = storedCombined
        ?? window.localStorage.getItem(PERSONALIZADAS_STORAGE_KEY)
        ?? window.localStorage.getItem(ACTIVE_RECALL_STORAGE_KEY);
      if (!raw) return;
      const ids = JSON.parse(raw);
      if (!Array.isArray(ids)) return;

      const mapped = ids.reduce((acc, id) => {
        if (typeof id === "string") acc[id] = true;
        return acc;
      }, {});

      if (!storedCombined) {
        const previousTeamIds = (() => {
          try {
            const teamRaw = window.localStorage.getItem(PERSONALIZADAS_STORAGE_KEY);
            const activeRaw = window.localStorage.getItem(ACTIVE_RECALL_STORAGE_KEY);
            const teamIds = teamRaw ? JSON.parse(teamRaw) : [];
            const activeIds = activeRaw ? JSON.parse(activeRaw) : [];
            return [...teamIds, ...activeIds];
          } catch {
            return ids;
          }
        })();

        const mergedIds = Array.from(new Set(previousTeamIds.filter((id) => typeof id === "string")));
        window.localStorage.setItem(COMBINED_TEAM_STORAGE_KEY, JSON.stringify(mergedIds));
      }

      setMasteredTeamById(mapped);
    } catch {
      setMasteredTeamById({});
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = Object.keys(masteredTeamById).filter((id) => masteredTeamById[id]);
    window.localStorage.setItem(COMBINED_TEAM_STORAGE_KEY, JSON.stringify(ids));
  }, [masteredTeamById]);

  useEffect(() => {
    if (!isTeamMode) return;
    const masteredSet = new Set(
      Object.keys(masteredTeamRef.current).filter((id) => masteredTeamRef.current[id])
    );
    const newQueue = orderedFiltered
      .filter(({ concept }) => !masteredSet.has(concept.id))
      .map(({ originalIdx }) => originalIdx);
    setQueue(newQueue);
    setQueueIdx(0);
    setFlipped(false);
  }, [isTeamMode, orderedFiltered]);

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
        if (isTeamMode) {
          setQueueIdx((i) => i + 1);
        } else {
          setIndex((i) => Math.min(orderedFiltered.length - 1, i + 1));
        }
        setFlipped(false);
      } else if (e.key === "ArrowLeft") {
        if (!isTeamMode) {
          setIndex((i) => Math.max(0, i - 1));
          setFlipped(false);
        }
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (isTeamMode && (e.key === "m" || e.key === "M")) {
        const currentId = current?.concept?.id;
        if (!currentId) return;
        setMasteredTeamById((prev) => ({ ...prev, [currentId]: !prev[currentId] }));
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [orderedFiltered.length, isTeamMode, current]);

  const teamMetrics = useMemo(() => {
    const byAxis = {
      Historia: { total: 0, mastered: 0 },
      "Metodología": { total: 0, mastered: 0 },
      "Teoría Social": { total: 0, mastered: 0 },
    };

    let total = 0;
    let mastered = 0;

    TEAM_STUDY_DECK.forEach((card) => {
      total += 1;
      if (byAxis[card.eje]) byAxis[card.eje].total += 1;

      if (masteredTeamById[card.id]) {
        mastered += 1;
        if (byAxis[card.eje]) byAxis[card.eje].mastered += 1;
      }
    });

    const filteredTotal = orderedFiltered.length;
    const filteredMastered = isTeamMode
      ? orderedFiltered.reduce((acc, row) => acc + (masteredTeamById[row.concept.id] ? 1 : 0), 0)
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
  }, [masteredTeamById, orderedFiltered, isTeamMode]);

  const resetMastery = () => {
    setMasteredTeamById({});
  };

  const handleDifficult = () => {
    if (queueIdx >= queue.length) return;
    const newQueue = [...queue];
    const cardIdx = newQueue.splice(queueIdx, 1)[0];
    const insertPos = Math.min(queueIdx + 4, newQueue.length);
    newQueue.splice(insertPos, 0, cardIdx);
    setQueue(newQueue);
    setFlipped(false);
  };

  const handleNormal = () => {
    setQueueIdx((i) => i + 1);
    setFlipped(false);
  };

  const handleMasteredCurrent = () => {
    if (queueIdx >= queue.length) return;
    const cardIdx = queue[queueIdx];
    const cardId = sourceData[cardIdx]?.id;
    if (!cardId) return;
    setMasteredTeamById((prev) => ({ ...prev, [cardId]: true }));
    const newQueue = [...queue];
    newQueue.splice(queueIdx, 1);
    setQueue(newQueue);
    setFlipped(false);
  };

  const resetTeamMastery = () => {
    setMasteredTeamById({});
    const newQueue = orderedFiltered.map(({ originalIdx }) => originalIdx);
    setQueue(newQueue);
    setQueueIdx(0);
    setFlipped(false);
  };

  const handleGoToCard = (cardId) => {
    if (!cardId.trim()) return;

    if (isTeamMode) {
      const foundIdx = queue.findIndex(
        (originalIdx, position) => position >= queueIdx && sourceData[originalIdx]?.id === cardId
      );
      if (foundIdx >= 0) {
        setQueueIdx(foundIdx);
      }
    } else {
      const foundIdx = orderedFiltered.findIndex(({ concept }) => concept.id === cardId);
      if (foundIdx >= 0) {
        setIndex(foundIdx);
      }
    }

    setFlipped(false);
    setShowSearch(false);
    setSelectedCardId("");
  };

  const handleAxis = (axis) => {
    setAxisFilter(axis);
    setIndex(0);
    setQueueIdx(0);
    setFlipped(false);
    setShowSearch(false);
    setSelectedCardId("");
  };

  const handleMode = (mode) => {
    setStudyMode(mode);
    const nextSource = mode === "personalizadas" ? TEAM_STUDY_DECK : guiaData;
    setOrder(nextSource.map((_, i) => i));
    setAxisFilter("Todos");
    setIndex(0);
    setQueueIdx(0);
    setFlipped(false);
    setIsRandom(false);
    setShowSearch(false);
    setSelectedCardId("");
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
    setShowSearch(false);
    setSelectedCardId("");
  };

  const handleSequential = () => {
    setOrder(sourceData.map((_, i) => i));
    setIsRandom(false);
    setIndex(0);
    setFlipped(false);
    setShowSearch(false);
    setSelectedCardId("");
  };

  const teamMasteredCount = Object.keys(masteredTeamById).filter(
    (id) => masteredTeamById[id]
  ).length;

  if (!current) {
    if (isTeamMode) {
      const deckEmpty = orderedFiltered.length === 0;
      return (
        <main className="container-shell space-y-5">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            {deckEmpty ? (
              <p className="text-lg font-semibold text-slate-700">No hay tarjetas para este filtro.</p>
            ) : (
              <>
                <p className="text-2xl font-bold text-emerald-800">¡Mazo completado!</p>
                <p className="mt-2 text-sm text-emerald-600">
                  {teamMasteredCount > 0
                    ? `Dominaste ${teamMasteredCount} tarjeta${teamMasteredCount !== 1 ? "s" : ""}.`
                    : "Revisaste todas las tarjetas del mazo."}
                </p>
                <button
                  type="button"
                  onClick={resetTeamMastery}
                  className="mt-5 rounded-xl bg-brand-700 px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Reiniciar y repetir
                </button>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {MODES.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => handleMode(mode.id)}
                className={`motion-lift motion-press rounded-full px-3 py-1 text-xs font-semibold transition ${
                  studyMode === mode.id
                    ? "bg-brand-700 text-white"
                    : "border border-brand-300 bg-white text-brand-900 hover:bg-brand-50"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </main>
      );
    }
    return (
      <main className="container-shell">
        <p className="text-sm text-slate-500">No hay tarjetas para este filtro.</p>
      </main>
    );
  }

  const { concept } = current;
  const isCurrentMastered = isTeamMode ? Boolean(masteredTeamById[concept.id]) : false;
  const usesPromptFormat = isTeamMode;
  const axisColors = AXIS_COLOR[concept.eje] || { bg: "bg-brand-700", text: "text-white" };

  return (
    <main className="container-shell space-y-5">
      <header className="motion-rise motion-stagger rounded-2xl bg-brand-900 p-6 text-white shadow-xl" style={{ "--motion-index": 0 }}>
        <h1 className="font-serif text-2xl">
          Flashcards — {isTeamMode ? "Aprendizaje en equipo" : "100 Conceptos"}
        </h1>
        <p className="mt-1 text-sm text-brand-100">
          {isTeamMode
            ? "Reúne Active Recall y trabajo en equipo en un solo mazo con repetición por dificultad, búsqueda y seguimiento de dominio."
            : "Voltea cada tarjeta para ver la síntesis, referencia y alerta de examen."}
        </p>
        {isTeamMode && (
          <p className="mt-2 text-xs text-brand-200">
            Cobertura combinada: evocación directa, inversión, alertas y banco del equipo.
          </p>
        )}
      </header>

      {isTeamMode && (
        <section className="motion-rise motion-stagger space-y-3 rounded-2xl border border-brand-200 bg-white p-4 shadow-sm" style={{ "--motion-index": 1 }}>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold text-brand-900">
              Dominadas: {teamMetrics.mastered}/{teamMetrics.total} ({teamMetrics.pct}%)
            </p>
            <p className="text-xs text-slate-500">
              Filtro actual: {teamMetrics.filteredMastered}/{teamMetrics.filteredTotal} ({teamMetrics.filteredPct}%)
            </p>
            <button
              type="button"
              onClick={resetMastery}
              className="motion-lift motion-press ml-auto rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Reiniciar progreso
            </button>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-brand-100">
            <div
              className="h-full rounded-full bg-brand-700 transition-all"
              style={{ width: `${teamMetrics.pct}%` }}
            />
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {Object.entries(teamMetrics.byAxis).map(([axis, stats]) => {
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
            className={`motion-lift motion-press rounded-full px-3 py-1 text-xs font-semibold transition ${
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
            className={`motion-lift motion-press rounded-full px-3 py-1 text-xs font-semibold transition ${
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
            onClick={() => setShowSearch(!showSearch)}
            className="motion-lift motion-press rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            aria-label="Buscar tarjeta por ID"
          >
            🔍 Buscar
          </button>
          <button
            type="button"
            onClick={isRandom ? handleSequential : handleShuffle}
            className={`motion-lift motion-press rounded-full px-3 py-1 text-xs font-semibold transition ${
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

      {showSearch && (
        <div className="motion-rise motion-stagger rounded-2xl border border-brand-300 bg-brand-50 p-4" style={{ "--motion-index": 2 }}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-700">Ir a una tarjeta específica</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <select
              value={selectedCardId}
              onChange={(e) => setSelectedCardId(e.target.value)}
              className="flex-1 rounded-lg border border-brand-300 bg-white px-3 py-2 text-sm text-brand-900 focus:border-brand-700 focus:outline-none"
            >
              <option value="">Selecciona una tarjeta del mazo actual</option>
              {selectableCards.map(({ concept, targetIndex }) => (
                <option key={concept.id} value={concept.id}>
                  {concept.id} · {targetIndex + 1}. {(concept.titulo || concept.prompt || "Tarjeta").slice(0, 72)}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => handleGoToCard(selectedCardId)}
              disabled={!selectedCardId}
              className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Ir
            </button>
          </div>
          <p className="mt-2 text-xs text-brand-700/80">
            {isTeamMode
              ? "Solo muestra las tarjetas que siguen activas en tu mazo actual."
              : "Muestra las tarjetas visibles según el modo, filtro y orden actual."}
          </p>
        </div>
      )}

      {/* Counter */}
      <p className="text-center text-sm text-slate-500">
        {isTeamMode ? (
          <>
            Tarjeta{" "}
            <strong className="text-brand-900">{Math.min(queueIdx + 1, queue.length || 1)}</strong>{" "}
            de <strong className="text-brand-900">{queue.length}</strong>
          </>
        ) : (
          <>
            Tarjeta <strong className="text-brand-900">{safeIndex + 1}</strong> de{" "}
            <strong className="text-brand-900">{orderedFiltered.length}</strong>
          </>
        )}
        {axisFilter !== "Todos" && <span className="ml-1 text-slate-400">· {axisFilter}</span>}
        {isTeamMode && (
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
            {usesPromptFormat ? (
              <>
                <p className="mb-2 rounded-full bg-brand-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                  {isTeamMode
                    ? concept.kind === "direct"
                      ? "Directa"
                      : concept.kind === "inverse"
                        ? "Inversa"
                        : concept.kind === "cloze"
                          ? "Alerta"
                          : concept.kind === "error-review"
                            ? "Error"
                            : concept.kind === "team-review"
                              ? "Equipo"
                              : "Tarjeta"
                    : concept.kind === "direct"
                      ? "Directa"
                      : concept.kind === "inverse"
                        ? "Inversa"
                        : "Alerta"}
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
            {usesPromptFormat ? (
              <>
                <h3 className="mb-3 font-serif text-lg">{concept.answer}</h3>
                {concept.note ? (
                  <div className="mb-3 rounded-lg bg-brand-800 p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-300">
                      {isTeamMode ? "Detalle" : "Precisión"}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-brand-100">{concept.note}</p>
                  </div>
                ) : null}
                {isTeamMode && (
                  <div
                    className="mt-4 flex justify-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleDifficult(); }}
                      className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
                    >
                      Difícil
                    </button>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleNormal(); }}
                      className="rounded-xl bg-slate-600 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                    >
                      Normal
                    </button>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleMasteredCurrent(); }}
                      className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      Ya me la sé ✓
                    </button>
                  </div>
                )}
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

            <p className="mt-auto text-center text-xs text-brand-400">
              {isTeamMode ? "Pulsa una opción" : "Pulsa para voltear"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-3">
        {!isTeamMode && (
          <button
            type="button"
            onClick={handlePrev}
            disabled={safeIndex === 0}
            aria-label="Tarjeta anterior"
            className="motion-lift motion-press rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
          >
            ← Anterior
          </button>
        )}
        <button
          type="button"
          onClick={handleFlip}
          className="motion-lift motion-press rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white"
          aria-label="Voltear tarjeta"
        >
          Voltear
        </button>
        {!isTeamMode && (
          <button
            type="button"
            onClick={handleNext}
            disabled={safeIndex === orderedFiltered.length - 1}
            aria-label="Tarjeta siguiente"
            className="motion-lift motion-press rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
          >
            Siguiente →
          </button>
        )}
      </div>
    </main>
  );
}
