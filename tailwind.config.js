/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      animation: {
        "spin-15s": "spin 15s linear infinite",
        "spin-15s-backwards": "spin-backwards 15s linear infinite",
        goyang: "goyang 2s ease-in-out infinite",
        "goyang-reverse": "goyang-reverse 2s ease-in-out infinite",
        'bounce-x': 'bounce-x 1s infinite'
      },
      keyframes: {
        "spin-backwards": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "goyang-reverse": {
          "0%, 100%": { transform: "rotate(4deg)" },
          "50%": { transform: "rotate(-4deg)" },
        },
        "bounce-x": {
          "0%, 100%": { transform: "translateX(-25%)", "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateX(0)" },
        }
      },
    },
  },
  plugins: [],
};
