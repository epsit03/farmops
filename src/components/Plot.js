import React, { useState, useEffect } from 'react';
import './Plot.css';

const Plot = ({ id, onDevelop }) => {
  const [development, setDevelopment] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);  // Timer for development
  const [isCompleted, setIsCompleted] = useState(false);
  const [duration, setDuration] = useState(0);  // Total time for development

  // Effect to count down the timer if there's an active development
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && development) {
      setIsCompleted(true);
    }
    return () => clearInterval(timer);  // Cleanup the timer
  }, [timeLeft, development]);

  // Function to handle development selection
  const handleDevelopmentSelection = (type, cost, duration) => {
    if (!development || isCompleted) {
      setDevelopment(type);
      setTimeLeft(duration);  // Set the timer for the task duration
      setDuration(duration);  // Set the total duration for progress calculation
      setIsCompleted(false);  // Reset completion status
      onDevelop(id, type, cost);
    } else {
      alert('Development already in progress!');
    }
  };

  // Progress calculation for the progress bar
  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <div className="plot">
      <h3>Plot {id}</h3>

      {!development ? (
        <div className="development-options">
          <button onClick={() => handleDevelopmentSelection('Road Construction', 10000, 10)}>
            Road Construction (₹10,000) - 10s
          </button>
          <button onClick={() => handleDevelopmentSelection('Streetlight Installation', 5000, 5)}>
            Streetlight Installation (₹5,000) - 5s
          </button>
          <button onClick={() => handleDevelopmentSelection('Sanitation Improvement', 8000, 8)}>
            Sanitation Improvement (₹8,000) - 8s
          </button>
        </div>
      ) : (
        <div className="development-status">
          {isCompleted ? (
            <strong>{development} Completed!</strong>
          ) : (
            <strong>{development} in progress... ({timeLeft}s remaining)</strong>
          )}
        </div>
      )}

      {/* Display progress bar if a development is in progress */}
      {development && !isCompleted && (
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {/* Allow further developments after the task is completed */}
      {isCompleted && (
        <button onClick={() => setDevelopment(null)} className="new-development-button">
          Start New Development
        </button>
      )}
    </div>
  );
};

export default Plot;
