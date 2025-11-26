import { useState, useEffect } from "react";

const texts = ["Desenvolvedor Fullstack", "Java | Spring Boot", "React | TypeScript"];

export function Typewriter() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div className="text-xl md:text-3xl font-bold font-mono mb-8 text-foreground">
            <span className="text-primary">&lt;</span>
            <span>{text}</span>
            <span className="animate-blink border-r-4 border-primary ml-1"></span>
            <span className="text-primary">/&gt;</span>
        </div>
    );
}
