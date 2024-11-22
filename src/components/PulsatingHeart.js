import React, { useState, useEffect } from 'react';

function PulsatingHeart() {
  const [isPulsating, setIsPulsating] = useState(false);

  useEffect(() => {
    // Start pulsating after a delay (e.g., 2 seconds)
    const timeoutId = setTimeout(() => {
      setIsPulsating(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="heart-container">
      <div className={`heart ${isPulsating ? 'pulsating-heart' : ''}`}>❤️</div>
    </div>
  );
}

export default PulsatingHeart;