import { NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Results from "./pages/Results";
import GuiaEstudio from "./pages/GuiaEstudio";
import Flashcards from "./pages/Flashcards";

function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center gap-1 border-b border-brand-200 bg-brand-900/95 px-4 py-2 backdrop-blur sm:px-6"
      aria-label="Navegación principal"
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `motion-lift motion-press rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
            isActive
              ? "bg-brand-700 text-white"
              : "text-brand-200 hover:bg-brand-800 hover:text-white"
          }`
        }
        aria-label="Ir a inicio"
      >
        Inicio
      </NavLink>
      <NavLink
        to="/guia"
        className={({ isActive }) =>
          `motion-lift motion-press rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
            isActive
              ? "bg-brand-700 text-white"
              : "text-brand-200 hover:bg-brand-800 hover:text-white"
          }`
        }
        aria-label="Abrir guía de estudio interactiva"
      >
        Guía de Estudio
      </NavLink>
      <NavLink
        to="/flashcards"
        className={({ isActive }) =>
          `motion-lift motion-press rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
            isActive
              ? "bg-brand-700 text-white"
              : "text-brand-200 hover:bg-brand-800 hover:text-white"
          }`
        }
        aria-label="Abrir flashcards"
      >
        Flashcards
      </NavLink>
    </nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-enter motion-fade-scale">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/results" element={<Results />} />
        <Route path="/guia" element={<GuiaEstudio />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}
