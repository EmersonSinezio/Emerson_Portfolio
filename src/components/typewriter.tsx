import { useState, useEffect } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Desenvolvedor fullstack", "Desenvolvedor front-end"];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const speed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % 2);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex]);

  const styles = {
    blink: {
      animation: "blink 1s step-end infinite",
      borderRight: "4px solid",
    },
  };

  return (
    <div className="typewriter">
      {text}
      <span style={styles.blink}></span>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Typewriter;
