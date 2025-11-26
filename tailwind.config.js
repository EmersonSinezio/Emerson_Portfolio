/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.03)", opacity: "1" },
        },
        wave: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-8px) rotate(3deg)" },
          "50%": { transform: "translateY(0) rotate(0deg)" },
          "75%": { transform: "translateY(-5px) rotate(-2deg)" },
        },
        "fade-in": {
          from: { filter: "drop-shadow(10px 5px 10px rgba(255, 255, 255, 0.3))" },
          to: { filter: "drop-shadow(10px 5px 10px rgba(255, 255, 255, 0.5))" },
        },
        typing: {
          from: { width: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        erasing: {
          from: { width: "17ch" },
          to: { width: "0" },
        },
        backgroundAnimation: {
          "0%, 100%": { "background-position": "0% 100%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-20px) scale(1.05)" },
          "50%": { transform: "translateY(20px) scale(0.95)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        pulse: "pulse 6s ease-in-out infinite",
        wave: "wave 8s ease-in-out infinite",
        "fade-in": "fade-in 2s ease-in-out infinite alternate",
        typing: "typing 2s steps(20, end)",
        blink: "blink 1s step-end infinite",
        erasing: "erasing 2s steps(20, end)",
        backgroundAnimation: "backgroundAnimation 2s infinite alternate",
        float: "float 4s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
}