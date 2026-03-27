import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Results from "./pages/Results";
import GuiaEstudio from "./pages/GuiaEstudio";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/results" element={<Results />} />
        <Route path="/guia" element={<GuiaEstudio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
