import React from "react";
import { Check } from "lucide-react"; 

const ProgressBar = ({ step }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      {[1, 2, 3].map((num, index) => (
        <React.Fragment key={num}>
          {/* Step Circle */}
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full border-4 text-lg font-bold transition-all
              ${
                step > num
                  ? num === 3
                    ? "bg-green-600 border-green-600 text-white" 
                    : "bg-red-600 border-red-600 text-white" 
                  : "border-gray-300 text-gray-500"
              }`}
          >
            {step > num ? <Check size={24} className="text-white" /> : num}
          </div>

          {/* Progress Line (Except Last Step) */}
          {index < 2 && (
            <div
              className={`w-16 h-1 mx-2 transition-all ${
                step > num ? "bg-red-600" : "bg-gray-300"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
