/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#0ea5e9",
  dark: "#020617",
  light: "#f1f5f9",
  css: "#1572B6",
  django: "#092E20",
  express: "#000000",
  html: "#E34F26",
  javaScript: "#F7DF1E",
  mongoDb: "#47A248",
  mySql: "#4479A1",
  nextJs: "#000000",
  prisma: "#2D3748",
  python: "#3776AB",
  react: "#61DAFB",
  sass: "#CC6699",
  tailwind: "#06B6D4",
  typescript: "#3178C6",
  vite: "#646CFF",
  pandas: "#150458",
  scipy: "#8CAAE6",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
