import React from 'react';

export const Progress = ({ value = 50, className = '' }) => {
  return (
    <div className="w-full bg-gray-200 rounded h-4">
      <div
        className={`h-4 rounded ${className}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
