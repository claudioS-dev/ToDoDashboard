import React from "react";

const AddCard = () => {
  return (
    <div className="bg-gray-900 bg-opacity-70 text-white p-4 rounded-lg w-full max-w-sm mx-auto flex flex-col h-full backdrop-blur-sm border-2 border-dashed border-gray-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-center flex-grow">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4B5563"
              strokeWidth="4"
              strokeDasharray="15,15"
            />

            <g transform="translate(50,50)">
              <line
                x1="-20"
                y1="0"
                x2="20"
                y2="0"
                stroke="white"
                strokeWidth="4"
              />

              <line
                x1="0"
                y1="-20"
                x2="0"
                y2="20"
                stroke="white"
                strokeWidth="4"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
