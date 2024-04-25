import React from "react";

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
      <div className="relative">
        <div className="h-12 w-12 md:h-24 md:w-24 rounded-full border-t-4 border-b-4 border-sky-200"></div>
        <div className="absolute top-0 left-0 h-12 w-12 md:h-24 md:w-24 rounded-full border-t-4 border-b-4 border-pink-400 animate-spin"></div>
      </div>
    </div>
  );
}

export default Loading;
