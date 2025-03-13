import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="animate-ping absolute w-16 h-16 rounded-full bg-sky-600 opacity-75"></div>
        <div className="animate-pulse w-16 h-16 rounded-full bg-sky-500 shadow-lg shadow-sky-200"></div>
      </div>
    </div>
  );
};

export default Spinner;