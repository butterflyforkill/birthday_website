import React, { useState, useEffect } from 'react';

function FlyingText() {
  const [text, setText] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsStarted(true);
    }, 5000); // Delay of 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isStarted) {
      const intervalId = setInterval(() => {
        setText(generateRandomText());
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [isStarted]);

  const generateRandomText = () => {
    // Generate random text here, e.g., using a library or a predefined list
    return 'З Днем Народження!!!';
  };

  return (
    <div className="flying-text-container">
      <div className="flying-text">{text}</div>
    </div>
  );
}

export default FlyingText;