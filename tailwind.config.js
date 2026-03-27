/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f7f4",
          100: "#dae9e2",
          200: "#b5d4c6",
          300: "#8abca7",
          400: "#629f87",
          500: "#4d866f",
          600: "#3d6d5a",
          700: "#315748",
          800: "#29463b",
          900: "#203730"
        },
        accent: "#d1495b",
        ink: "#1f2933",
        paper: "#fcfdfc"
      },
      fontFamily: {
        sans: ["Poppins", "Nunito Sans", "Segoe UI", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
