import React, { useState, useEffect } from 'react';

function ProgressBar({ value, max }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === value) {
            return value; // Stop at value
          }
          return Math.min(oldProgress + 1, 100); // Increment progress
        });
      }, 25);
  
      return () => {
        clearInterval(timer); // Cleaning up the interval on component unmount
      };

  }, []);

  return (
    <div className='flex flex-row items-center justify-center'>
        <div className="bg-gray-200 h-1.5 rounded-full w-5/6 ">
            <div 
                className="bg-blue-500 h-1.5 rounded-full"
                style={{ width: `${(progress / max) * 100}%` }}
            />
        </div>
        <label htmlFor="" className="px-2 text-xs">{progress}%</label>
    </div>
  );
}

export default ProgressBar;