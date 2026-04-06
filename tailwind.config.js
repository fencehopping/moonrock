/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B0F1A",
        accent: "#4F8CFF",
        mist: "#F7F9FC",
        ink: "#0F1728",
        slateSoft: "#9BA3B4",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79,140,255,0.08), 0 24px 90px rgba(6,12,24,0.22)",
        panel: "0 18px 50px rgba(15, 23, 40, 0.08)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top right, rgba(79,140,255,0.16), transparent 24%), radial-gradient(circle at 10% 15%, rgba(79,140,255,0.10), transparent 18%)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        proposal: "1100px",
      },
      letterSpacing: {
        display: "-0.05em",
      },
    },
  },
  plugins: [],
};
