// // components/live-updates.tsx

// "use client";

// import React, { useEffect, useState } from "react";
// import { SiCodeforces } from "react-icons/si";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// type RatingData = {
//   date: string;
//   rating: number;
// };

// export default function LiveUpdates() {
//   const [ratingData, setRatingData] = useState<RatingData[] | null>(null);
//   const [currentRating, setCurrentRating] = useState<number | null>(null);

//   useEffect(() => {
//     fetch("/api/codeforces-rating")
//       .then((response) => response.json())
//       .then((data) => {
//         setRatingData(data.history);
//         setCurrentRating(data.currentRating);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   if (ratingData === null) {
//     return (
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex items-center justify-center">
//         <p>Loading data...</p>
//       </div>
//     );
//   }

//   const chartData = {
//     labels: ratingData.map((item) => item.date),
//     datasets: [
//       {
//         label: "Codeforces Rating",
//         data: ratingData.map((item) => item.rating),
//         fill: false,
//         backgroundColor: "#1f8acb",
//         borderColor: "#1f8acb",
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
//       <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
//         Live Updates
//       </h3>

//       {currentRating !== null && (
//         <div className="flex items-center mb-6">
//           <SiCodeforces className="text-3xl text-[#1f8acb] mr-4" />
//           <div>
//             <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//               Current Codeforces Rating
//             </p>
//             <p className="text-2xl font-bold text-indigo-600">
//               {currentRating}
//             </p>
//           </div>
//         </div>
//       )}

//       <div className="flex-1 relative">
//         <Line data={chartData} options={options} />
//       </div>
//     </div>
//   );
// }


// components/live-updates.tsx

"use client";

import React, { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler, // For gradient fills
  ScriptableContext,
  Color
} from "chart.js";
import { motion } from "framer-motion";
import zoomPlugin from "chartjs-plugin-zoom";
import annotationPlugin from "chartjs-plugin-annotation";
import { useTheme } from "@/context/theme-context";

// Register Chart.js plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin,
  annotationPlugin
);

type Contest = {
  date: string;
  newRating: number;
};

export default function LiveUpdates() {
  const { theme } = useTheme();
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const chartRef = useRef<ChartJS<"line">>(null);

  useEffect(() => {
    fetch("/api/competitive-programming")
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Sort contests by date
        data.sort((a: any, b: any) => a.date - b.date);

        const formattedData = data.map((contest: any) => ({
          date: new Date(contest.date).toLocaleDateString(),
          newRating: contest.newRating,
          dateValue: contest.date,
        }));
        setContests(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setContests([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
        <p>Loading data...</p>
      </div>
    );
  }

  // Handle case when there is no data
  if (contests.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
        <p>No data available.</p>
      </div>
    );
  }

  // Compute highest rating for annotations
  const highestRating =
    contests.length > 0
      ? Math.max(...contests.map((contest) => contest.newRating))
      : null;

  // Dynamic colors based on theme
  const textColor = theme === "dark" ? "#D1D5DB" : "#374151"; // Gray-300 and Gray-700
  const gridColor = theme === "dark" ? "#374151" : "#D1D5DB"; // Gray-700 and Gray-300
  const tooltipBgColor = theme === "dark" ? "#1F2937" : "#FFFFFF"; // Gray-800 and White
  const tooltipTextColor = theme === "dark" ? "#D1D5DB" : "#374151";

  // Prepare gradient
  const getGradient = (ctx: CanvasRenderingContext2D, chartArea: any) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(0, theme === "dark" ? "rgba(99, 102, 241, 0)" : "rgba(99, 102, 241, 0)");
    gradient.addColorStop(
      1,
      theme === "dark"
        ? "rgba(99, 102, 241, 0.4)"
        : "rgba(99, 102, 241, 0.4)"
    );
    return gradient;
  };

  const chartData: ChartData<"line"> = {
    labels: contests.map((contest) => contest.date),
    datasets: [
      {
        label: "Rating",
        data: contests.map((contest) => contest.newRating),
        fill: true,

        backgroundColor: (context: ScriptableContext<'line'>): Color | undefined => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
            return undefined;
        }
        return getGradient(ctx, chartArea);
        },

        borderColor: "#6366F1", // Indigo-500
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#6366F1",
        pointBorderWidth: 0,
        hoverRadius: 6,
        pointHoverBackgroundColor: "#F59E0B", // Amber-500
        pointHoverBorderColor: "#FFFFFF",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: tooltipBgColor,
        titleColor: tooltipTextColor,
        bodyColor: tooltipTextColor,
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        displayColors: false,
        callbacks: {
          title: (context) => `Date: ${context[0].label}`,
          label: (context) => `Rating: ${context.parsed.y}`,
        },
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
        pan: {
          enabled: true,
          mode: "xy",
        },
        limits: {
          x: { min: "original", max: "original" },
          y: { min: "original", max: "original" },
        },
      },
      annotation: {
        annotations: highestRating
          ? {
              highestRatingLine: {
                type: "line",
                yMin: highestRating,
                yMax: highestRating,
                borderColor: "#10B981", // Emerald-500
                borderWidth: 2,
                borderDash: [5, 5],
                label: {
                  content: "Highest Rating",
                  enabled: true,
                  position: "start",
                  backgroundColor: "#10B981",
                  color: "#FFFFFF",
                },
              },
            }
          : {},
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor,
          maxTicksLimit: 10,
        },
        grid: {
          color: gridColor,
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          color: textColor,
          padding: 10,
        },
        grid: {
          color: gridColor,
          borderDash: [5, 5],
          drawBorder: false,
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  const resetZoom = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Live Rating Chart
      </h3>
      <div className="h-80 relative">
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={resetZoom}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-600 transition-colors"
        >
          Reset Zoom
        </button>
      </div>
    </motion.div>
  );
}
