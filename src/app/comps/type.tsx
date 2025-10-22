"use client";
import { useState, useEffect } from "react";
import "../globals.css";

export default function Typewriter({
  texts,
  speed,
  delay,
}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typing, setTyping] = useState(true); // controls blinking cursor

  useEffect(() => {
    const current = texts[index];
    const typingSpeed = isDeleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.text.substring(0, prev.length - 1)
          : current.text.substring(0, prev.length + 1)
      );

      // toggle blinking while typing
      if (!isDeleting && text !== current.text) {
        setTyping(true);
      } else {
        setTyping(false); // stop blinking when sentence finished
      }

      if (!isDeleting && text === current.text) {
        setTimeout(() => setIsDeleting(true), delay);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        setTyping(true); // start blinking for next text
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, speed, delay]);

  const currentColor = texts[index].color;

  return (
    <h1
      className={`typewriter thick text-4xl sm:text-5xl md:text-7xl ${
        typing ? "typing" : ""
      }`}
      style={{
        color: currentColor,
        "--caret": currentColor, // dynamically set cursor color
      } as React.CSSProperties}
    >
      {text}
    </h1>
  );
}
