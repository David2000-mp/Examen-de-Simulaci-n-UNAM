import { useCallback, useEffect, useMemo, useState } from "react";
import {
  buildDetailedErrors,
  buildStudyGuideText,
  buildTrainingSubset,
  computeStats,
  filterByAxis,
  getPriorityReadings,
  shuffleQuestions
} from "../utils/analisis";
import { useTimer } from "./useTimer";

const STORAGE_KEY = "exam:v2";
const LEGACY_KEY = "exam:v1";
const EXAM_SECONDS = 120 * 60;

const initialState = {
  sessionId: null,
  lastCompletedSessionId: null,
  mode: null,
  axis: "General",
  status: "idle",
  questions: [],
  currentIndex: 0,
  answers: {},
  marked: {},
  erroresDetallados: {
    items: [],
    byAxis: {
      Historia: 0,
      "Metodología": 0,
      "Teoría": 0
    },
    generatedAt: null
  },
  trainingSession: {
    enabled: false,
    sourceExamId: null,
    questions: [],
    status: "idle",
    answers: {}
  },
  progress: {
    sessions: [],
    bestScores: {
      Historia: 0,
      "Metodología": 0,
      "Teoría": 0,
      overall: 0
    },
    totalSessions: 0,
    firstSessionDate: null,
    lastSessionDate: null
  },
  endAt: null,
  finishedAt: null,
  loadedFromStorage: false
};

export function useExamEngine(allQuestions = []) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let raw = localStorage.getItem(STORAGE_KEY);
    let migratedFromLegacy = false;

    if (!raw) {
      const legacyRaw = localStorage.getItem(LEGACY_KEY);
      if (legacyRaw) {
        raw = legacyRaw;
        migratedFromLegacy = true;
      }
    }

    if (!raw) {
      setState((prev) => ({ ...prev, loadedFromStorage: true }));
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      setState({ ...initialState, ...parsed, loadedFromStorage: true });
      if (migratedFromLegacy) {
        localStorage.removeItem(LEGACY_KEY);
      }
    } catch {
      setState((prev) => ({ ...prev, loadedFromStorage: true }));
    }
  }, []);

  useEffect(() => {
    if (!state.loadedFromStorage) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const finishExam = useCallback(() => {
    setState((prev) => {
      if (prev.status === "finished") {
        return prev;
      }

      const detailed = buildDetailedErrors(prev.questions, prev.answers);
    const baseStats = computeStats(prev.questions, prev.answers);
    const sessionSummary = {
      sessionId: prev.sessionId,
      finishedAt: Date.now(),
      mode: prev.mode,
      axis: prev.axis,
      axisScores: baseStats.axisScores,
      overall: baseStats.overall,
      totalQuestions: prev.questions.length,
      totalErrors: detailed.items.length,
      isTraining: prev.trainingSession.enabled
    };

    const prevProgress = prev.progress ?? initialState.progress;
    const prevSessions = prevProgress.sessions ?? [];
    const prevBest = prevProgress.bestScores ?? initialState.progress.bestScores;
    const updatedBestScores = {
      Historia: Math.max(prevBest.Historia ?? 0, baseStats.axisScores.Historia),
      "Metodología": Math.max(prevBest["Metodología"] ?? 0, baseStats.axisScores["Metodología"]),
      "Teoría": Math.max(prevBest["Teoría"] ?? 0, baseStats.axisScores["Teoría"]),
      overall: Math.max(prevBest.overall ?? 0, baseStats.overall)
    };

      return {
        ...prev,
        status: "finished",
        finishedAt: Date.now(),
        endAt: null,
        lastCompletedSessionId: prev.sessionId,
        erroresDetallados: detailed,
        trainingSession: {
          ...prev.trainingSession,
          status: prev.trainingSession.enabled ? "finished" : prev.trainingSession.status
        },
        progress: {
          sessions: [...prevSessions, sessionSummary].slice(-50),
          bestScores: updatedBestScores,
          totalSessions: (prevProgress.totalSessions ?? 0) + 1,
          firstSessionDate: prevProgress.firstSessionDate ?? Date.now(),
          lastSessionDate: Date.now()
        }
      };
    });
  }, []);

  const { time } = useTimer({
    endAt: state.endAt,
    isRunning: state.status === "running",
    onExpire: finishExam
  });

  const startExam = useCallback(
    ({ mode, axis = "General" }) => {
      const filtered = filterByAxis(allQuestions, axis);
      if (!filtered.length) {
        setState((prev) => ({
          ...prev,
          mode: null,
          axis: "General",
          status: "idle",
          questions: [],
          currentIndex: 0,
          answers: {},
          marked: {},
          endAt: null,
          finishedAt: null
        }));
        return;
      }

      const questions = shuffleQuestions(filtered);
      const sessionId = `session-${Date.now()}`;

      setState((prev) => ({
        ...prev,
        sessionId,
        mode,
        axis,
        status: "running",
        questions,
        currentIndex: 0,
        answers: {},
        marked: {},
        erroresDetallados: {
          items: [],
          byAxis: {
            Historia: 0,
            "Metodología": 0,
            "Teoría": 0
          },
          generatedAt: null
        },
        trainingSession: {
          enabled: false,
          sourceExamId: null,
          questions: [],
          status: "idle",
          answers: {}
        },
        endAt: Date.now() + EXAM_SECONDS * 1000,
        finishedAt: null
      }));
    },
    [allQuestions]
  );

  const setAnswer = useCallback((questionId, optionIndex) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionIndex
      },
      trainingSession: prev.trainingSession.enabled
        ? {
            ...prev.trainingSession,
            answers: {
              ...prev.trainingSession.answers,
              [questionId]: optionIndex
            }
          }
        : prev.trainingSession
    }));
  }, []);

  const iniciarModoEntrenamiento = useCallback(() => {
    setState((prev) => {
      const subset = buildTrainingSubset(allQuestions, prev.erroresDetallados);
      if (!subset.length) {
        return prev;
      }

      return {
        ...prev,
        sessionId: `training-${Date.now()}`,
        mode: "entrenamiento",
        axis: "General",
        status: "running",
        questions: subset,
        currentIndex: 0,
        answers: {},
        marked: {},
        endAt: null,
        finishedAt: null,
        trainingSession: {
          enabled: true,
          sourceExamId: prev.lastCompletedSessionId,
          questions: subset,
          status: "running",
          answers: {}
        }
      }
    });
  }, [allQuestions]);

  const salirModoEntrenamiento = useCallback(() => {
    setState((prev) => ({
      ...prev,
      mode: null,
      axis: "General",
      status: "idle",
      questions: [],
      currentIndex: 0,
      answers: {},
      marked: {},
      endAt: null,
      finishedAt: null,
      trainingSession: {
        enabled: false,
        sourceExamId: null,
        questions: [],
        status: "idle",
        answers: {}
      }
    }));
  }, []);

  const toggleMark = useCallback((questionId) => {
    setState((prev) => ({
      ...prev,
      marked: {
        ...prev.marked,
        [questionId]: !prev.marked[questionId]
      }
    }));
  }, []);

  const goTo = useCallback((index) => {
    setState((prev) => ({
      ...prev,
      currentIndex: Math.max(0, Math.min(index, prev.questions.length - 1))
    }));
  }, []);

  const resetAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({ ...initialState, loadedFromStorage: true });
  }, []);

  const currentQuestion = state.questions[state.currentIndex];

  const stats = useMemo(() => {
    if (!state.questions.length) {
      return null;
    }

    const base = computeStats(state.questions, state.answers);
    const detailed = state.status === "finished" ? state.erroresDetallados : buildDetailedErrors(state.questions, state.answers);

    return {
      ...base,
      recommendations: getPriorityReadings(base.errors, base.axisScores),
      erroresDetallados: detailed,
      trainingAvailable: detailed.items.length > 0,
      progress: state.progress,
      questions: state.questions,
      answers: state.answers
    };
  }, [state.questions, state.answers, state.status, state.erroresDetallados, state.progress]);

  const descargarGuiaEstudio = useCallback(() => {
    const axisScores = stats?.axisScores || {
      Historia: 0,
      "Metodología": 0,
      "Teoría": 0
    };

    const guideText = buildStudyGuideText(state.erroresDetallados, axisScores);

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const blob = new window.Blob([guideText], { type: "text/markdown;charset=utf-8" });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "guia-estudio-personalizada.md";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(url);
    }

    return guideText;
  }, [state.erroresDetallados, stats]);

  return {
    state,
    time,
    currentQuestion,
    stats,
    progress: state.progress,
    startExam,
    setAnswer,
    toggleMark,
    goTo,
    finishExam,
    resetAll,
    iniciarModoEntrenamiento,
    salirModoEntrenamiento,
    descargarGuiaEstudio
  };
}
