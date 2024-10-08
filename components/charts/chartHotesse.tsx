'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);
export default function ChartHotesse() {
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];

  // Data want to show on chart
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];

  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "My First Dataset",
        data: datasets,
        fill: false,
        borderColor: "#BE7E00",
        tension: 0.1,
      },
      // insert similar in dataset object for making multi line chart
    ],
  };

  // To make configuration
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Y-axis Lable",
        },
        display: true,
        min: 10,
      },
      x: {
        title: {
          display: true,
          text: "x-axis Lable",
        },
        display: true,
      },
    },
  };

  return (
    <>
    <section  className="flex flex-1 flex-col min-w-80 bg-[#be7f003b] pt-8 px-8 gap-4 rounded-xl">
      <h2 className="text-white text-2xl">Monitoring des hotesses</h2>
      <h2 className="text-[#BE7E00] text-5xl">54</h2>
    <div className="" >
      <Line data={data} options={options} />
    </div>
    </section>
    
    </>
    
  );
  
}
