/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0ea5e9",
                dark: "#020617",
                light: "#f1f5f9",
            },
        },
    },
    plugins: [],
};
