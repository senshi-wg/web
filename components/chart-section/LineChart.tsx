"use client";
import {
  Chart as ChartJS,
  ArcElement, Tooltip, Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function LineChart() {

  const data = [3.8, 0.8, 2.6, 2.2, 3.5, 2.6];

  return (
      <Line width={"full"} key="linechart" data={{
        labels: ["Ind", "fds", "fds", "fdsf", "fdsf"],
        datasets: [{
          data: data,
          borderWidth: 1,
          tension: 0.5,
          borderColor: "gray",
          pointBackgroundColor: "gray",
          backgroundColor:"	rgba(32,32,32,0.5)",
          fill:true
        }],
      }}
        options={{
        scales:{
          y:{
            grid:{
              color:"grey",
              drawTicks:false
            },
            border:{
              dash:[3]
            },
            ticks:{
              display:false,
              stepSize:1
            }
          },
          x:{
            grid:{
              display:false,
              drawTicks:false,
            },
            border:{
              dash:[6]
            },
            ticks:{
              display:false,
              
            }
          },
        },
        plugins:{
          legend:{
            display:false,
          }
        },
        elements:{
          point:{
            radius:0
          }
        }
        }}
      />
  );
}
