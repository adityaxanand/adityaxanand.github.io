// components/codeforces-live-updates.tsx

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
  Filler,
  ScriptableContext,
  Color,
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
  rating: number;
};

export default function CodechefLiveUpdates() {
  const { theme } = useTheme();
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const chartRef = useRef<ChartJS<"line">>(null);

  const username = process.env.NEXT_PUBLIC_CODECHEF_USERNAME || "adityaxanand";

  useEffect(() => {
    fetch(`https://codechef-api.vercel.app/handle/${username}`)
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Extract the ratingData array from the response
        const ratingData = data.ratingData;
        // Sort contests by the end_date field
        ratingData.sort(
          (a: any, b: any) =>
            new Date(a.end_date).getTime() - new Date(b.end_date).getTime()
        );

        // Map the contests to our Contest type
        const formattedData = ratingData.map((contest: any) => ({
          date: new Date(contest.end_date).toLocaleDateString(),
          rating: parseInt(contest.rating, 10),
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

  if (contests.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex items-center justify-center">
        <p>No data available.</p>
      </div>
    );
  }

  // Compute the highest rating for annotation purposes
  const highestRating =
    contests.length > 0
      ? Math.max(...contests.map((contest) => contest.rating))
      : null;

  // Define colors based on theme
  const textColor = theme === "dark" ? "#D1D5DB" : "#374151";
  const gridColor = theme === "dark" ? "#374151" : "#D1D5DB";
  const tooltipBgColor = theme === "dark" ? "#1F2937" : "#FFFFFF";
  const tooltipTextColor = theme === "dark" ? "#D1D5DB" : "#374151";

  // Function to create a gradient for the chart fill
  const getGradient = (
    ctx: CanvasRenderingContext2D,
    chartArea: any
  ): CanvasGradient => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(0, "rgba(99, 102, 241, 0)");
    gradient.addColorStop(1, "rgba(99, 102, 241, 0.4)");
    return gradient;
  };

  const chartData: ChartData<"line"> = {
    labels: contests.map((contest) => contest.date),
    datasets: [
      {
        label: "Rating",
        data: contests.map((contest) => contest.rating),
        fill: true,
        backgroundColor: (
          context: ScriptableContext<"line">
        ): Color | undefined => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return undefined;
          return getGradient(ctx, chartArea);
        },
        borderColor: "#6366F1",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#6366F1",
        pointBorderWidth: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#F59E0B",
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
          wheel: { enabled: true },
          pinch: { enabled: true },
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
                borderColor: "#10B981",
                borderWidth: 2,
                borderDash: [5, 5],
                label: {
                  content: "Highest Rating",
                  position: "start",
                  backgroundColor: "#10B981",
                  color: "#FFFFFF",
                  display: true,
                  font: { size: 12 },
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
          lineWidth: 1,
          tickBorderDash: [5, 5],
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
        Live Codechef Rating Chart
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
