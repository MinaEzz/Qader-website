/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0.2rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "primary-300": "#89cfff",
        "primary-400": "#52b4ff",
        "primary-500": "#2a91ff",
        "primary-600": "#0d6efd",
        "primary-700": "#0c5ae9",
        "primary-800": "#1149bc",
        "primary-900": "#144194",
        "coral-red": "#c70000",
      },
    },
  },
  plugins: [],
};
