'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);
export default function ChartCampaign() {
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];

  // Data want to show on chart
  const datasets = [10, 15, 67, 70, 85, 89, 89, 90];

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
    <section  className="flex flex-1 h-[500px] flex-col w-[400px] bg-[#be7f003b] pt-8 px-8 gap-4 rounded-xl">
      <h2 className="text-white text-2xl">Visualisation des campagnes en cours</h2>
      <div className="flex justify-between mt-8">
            <div>
            <h2 className="text-[#BE7E00] text-lg">Campagnes</h2>
            </div>
            <div>
            <h2 className="text-[#BE7E00] text-lg">Hotesses</h2>
            </div>
            <div>
            <h2 className="text-[#BE7E00] text-lg">Dates</h2>
            </div>
            <div>
            <h2 className="text-[#BE7E00] text-lg">Point de vente</h2>
            </div>
      </div>
      
    <div className="h-[24rem] flex items-center justify-center pb-12" >
      <Line data={data} options={options} />
    </div>
    </section>
    
    </>
    
  );
  
}
