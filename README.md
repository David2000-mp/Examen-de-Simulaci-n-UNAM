# Simulador de examen de maestria de gatisifu

Aplicacion web mobile-first para practicar examen de maestria en Trabajo Social con modos por eje, simulacro general, practica con retroalimentacion y funcionamiento offline (PWA).

## Requisitos

- Node.js 20 LTS o superior
- npm 10 o superior

## Instalacion

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: entorno local
- `npm run build`: build produccion
- `npm run preview`: previsualizar build
- `npm run lint`: revisar calidad

## Estructura

- `src/data/preguntas.json`: banco de preguntas
- `src/components/Examen.jsx`: render del examen
- `src/components/Dashboard.jsx`: analitica final
- `src/hooks/useTimer.js`: cronometro
- `src/hooks/useExamEngine.js`: estado principal del motor
- `src/utils/analisis.js`: saneamiento async, filtros, shuffle y recomendaciones

## Funcionalidades implementadas

- Timer de 120 minutos con persistencia por `localStorage`.
- Modos: Simulacro general, Examen por eje y Practica.
- En Practica: muestra justificacion al responder.
- Dashboard con porcentaje global y por eje.
- Priorizacion inteligente de lecturas: primero eje con menor puntaje.
- PWA instalable con cache de app y preguntas para uso offline.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En Vercel, conecta el repositorio.
3. Framework: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Habilita Preview Deployments para PRs.

## Health Check Post-Despliegue

Despues de cada deploy, valida manualmente estos 5 puntos:

1. Timer: Inicia un examen y confirma que el cronometro (120 min) desciende cada segundo y finaliza el intento al llegar a 00:00.
2. Persistencia: Responde algunas preguntas, recarga la pagina y valida que el progreso se recupere desde `localStorage`.
3. PWA offline: Instala la app, activa modo sin conexion y confirma que Home, examen y preguntas cargadas sigan disponibles.
4. Radar de resultados: Finaliza un intento y valida que la grafica radar por ejes (Historia, Metodologia, Teoria) se renderice correctamente.
5. Carga de JSON: Verifica que el banco de preguntas se cargue sin errores visibles y que los modos General/Eje muestren reactivos.

## Nota sobre datos

El proyecto incluye un set minimo de ejemplo en `src/data/preguntas.json`.
Reemplaza el archivo con tu banco completo de 100 preguntas para produccion.
