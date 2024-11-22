import React, { useEffect, useRef } from 'react';

function Sparkles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');

      // Randomize initial position, size, and color
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.width = `${Math.random() * 10 + 5}px`;
      sparkle.style.height = sparkle.style.width;
      sparkle.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.5})`;

      container.appendChild(sparkle);

      // Remove the sparkle after a certain time
      setTimeout(() => {
        container.removeChild(sparkle);
      }, 2000); // Adjust the timeout as needed
    };

    const intervalId = setInterval(createSparkle, 50); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="sparkle-container" ref={containerRef}></div>
  );
}

export default Sparkles;