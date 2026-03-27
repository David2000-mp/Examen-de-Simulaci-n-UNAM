import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useExamEngine } from "../hooks/useExamEngine";
import { loadAndSanitizeQuestions } from "../utils/analisis";

const ExamContext = createContext(null);

export function ExamProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [dataErrors, setDataErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function bootstrap() {
      setIsLoading(true);
      setLoadError(null);

      try {
        const { questions: cleanQuestions, errors } = await loadAndSanitizeQuestions();
        if (!mounted) {
          return;
        }

        setQuestions(Array.isArray(cleanQuestions) ? cleanQuestions : []);
        setDataErrors(Array.isArray(errors) ? errors : []);
      } catch (error) {
        if (!mounted) {
          return;
        }

        console.error("Error cargando banco de preguntas", error);
        setQuestions([]);
        setDataErrors([]);
        setLoadError("No se pudo cargar el banco de preguntas. Revisa el archivo JSON.");
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    bootstrap();
    return () => {
      mounted = false;
    };
  }, []);

  const engine = useExamEngine(questions);

  const value = useMemo(
    () => ({
      engine,
      loading: isLoading,
      isLoading,
      dataErrors,
      loadError
    }),
    [engine, isLoading, dataErrors, loadError]
  );

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
}

export function useExamContext() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExamContext must be used inside ExamProvider");
  }
  return context;
}
