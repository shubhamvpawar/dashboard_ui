import React from "react";

const NetProfit = () => {
  return (
    <div className="flex bg-gray-800 px-4 rounded-lg shadow-md col-span-1">
      <div className="w-3/5 flex flex-col justify-between py-4">
        <h2 className="text-xs mb-4">Net Profit</h2>
        <span className="text-2xl font-bold">$6759.25</span>
        <span className="text-green-600 font-semibold">^ 3%</span>
      </div>
      <div className="relative w-2/5 flex items-center justify-center">
        <svg className="h-56 w-56 max-w-xs max-h-xs" viewBox="0 0 256 256">
          <circle
            cx="128"
            cy="128"
            r="110"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="25"
          />
          <circle
            cx="128"
            cy="128"
            r="110"
            fill="none"
            stroke="#367588"
            strokeWidth="25"
            strokeDasharray="628"
            strokeDashoffset="188"
            transform="rotate(-110 128 128)"
          />
        </svg>

        <div className="absolute flex flex-col items-center justify-center">
          <span className="font-bold text-sm">70%</span>
          <span className="text-xs">Goal</span>
          <span className="text-xs">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default NetProfit;
