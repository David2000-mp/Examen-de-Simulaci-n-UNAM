import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Examen from "../components/Examen";
import { useExamContext } from "../state/ExamProvider";

export default function Exam() {
  const navigate = useNavigate();
  const { engine } = useExamContext();

  useEffect(() => {
    if (engine.state.status === "finished") {
      navigate("/results");
      return;
    }

    if (engine.state.status === "idle") {
      navigate("/");
    }
  }, [engine.state.status, navigate]);

  return (
    <main className="container-shell">
      <Examen engine={engine} />
    </main>
  );
}
