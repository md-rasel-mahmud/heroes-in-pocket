/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0891b2",

          secondary: "#8b5cf6",

          accent: "#3b82f6",

          neutral: "#221929",

          "base-100": "#374151",

          info: "#97BCDD",

          success: "#059669",

          warning: "#FA9F38",

          error: "#F66E55",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
