import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { useExamContext } from "../state/ExamProvider";

export default function Results() {
  const navigate = useNavigate();
  const { engine } = useExamContext();

  useEffect(() => {
    if (engine.state.status !== "finished") {
      navigate("/");
    }
  }, [engine.state.status, navigate]);

  const handleRestart = () => {
    engine.resetAll();
    navigate("/");
  };

  const handleRetryErrors = () => {
    engine.iniciarModoEntrenamiento();
    navigate("/exam");
  };

  const handleDownloadGuide = () => {
    engine.descargarGuiaEstudio();
  };

  return (
    <main className="container-shell motion-rise motion-stagger" style={{ "--motion-index": 0 }}>
      <Dashboard
        stats={engine.stats}
        onRestart={handleRestart}
        onRetryErrors={handleRetryErrors}
        onDownloadGuide={handleDownloadGuide}
      />
    </main>
  );
}
