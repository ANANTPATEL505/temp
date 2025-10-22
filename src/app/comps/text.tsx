import React, { useState } from "react";

const ScrambleTextHover = ({ text, speed = 30, duration = 200 }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const [display, setDisplay] = useState(text);
  const [animating, setAnimating] = useState(false);

  const handleHover = () => {
    if (animating) return;
    setAnimating(true);
    let frame = 0;
    const totalFrames = duration / speed;

    const interval = setInterval(() => {
      if (frame < totalFrames) {
        const scrambled = text
          .split("")
          .map(() => letters[Math.floor(Math.random() * letters.length)])
          .join("");
        setDisplay(scrambled);
        frame++;
      } else {
        setDisplay(text);
        setAnimating(false);
        clearInterval(interval);
      }
    }, speed);
  };

  return (
    <span
      onMouseEnter={handleHover}
      className="cursor-pointer transition-colors "
    >
      {display}
    </span>
  );
};

export default ScrambleTextHover;
