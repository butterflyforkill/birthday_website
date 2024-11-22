import React, { useState, useEffect, useRef } from 'react';

function Fairy() {
  const [angle, setAngle] = useState(0);
  const wingsRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 10) % 360);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fairy">
      <img ref={wingsRef} src="./fairy.png" alt="Fairy" className="wings" />
    </div>
  );
}

export default Fairy;