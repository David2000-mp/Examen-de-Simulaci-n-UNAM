import {
  Chart as ChartJS,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarByAxis({ axisScores }) {
  const labels = Object.keys(axisScores);
  const values = Object.values(axisScores);

  const data = {
    labels,
    datasets: [
      {
        label: "Aciertos por eje",
        data: values,
        borderColor: "#0f4c5c",
        backgroundColor: "rgba(77, 134, 111, 0.25)",
        pointBackgroundColor: "#d1495b",
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { stepSize: 20 }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      }
    }
  };

  return (
    <div className="h-72 w-full rounded-xl bg-white p-3 ring-1 ring-slate-200">
      <Radar data={data} options={options} />
    </div>
  );
}
