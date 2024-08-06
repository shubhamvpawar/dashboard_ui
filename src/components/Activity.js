import React from "react";
import { Bar } from "react-chartjs-2";

const Activity = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Activity",
        data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1 md:col-span-2">
      <h2 className="text-xl mb-4">Activity</h2>
      <Bar data={data} />
    </div>
  );
};

export default Activity;
