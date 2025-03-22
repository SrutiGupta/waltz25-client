import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div className="flex justify-center mb-6">
      {[1, 2, 3].map((num) => (
        <div
          key={num}
          className={`w-12 h-12 flex items-center justify-center mx-2 rounded-full border-4 ${
            step >= num ? "bg-red-600 border-red-600 text-white" : "border-gray-300 text-gray-500"
          }`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
