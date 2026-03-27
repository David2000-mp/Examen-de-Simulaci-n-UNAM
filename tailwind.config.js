/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef2fb",
          100: "#d3ddf4",
          200: "#a7bce9",
          300: "#7a9bde",
          400: "#4f7bd3",
          500: "#2b5cc8",
          600: "#1f4ab3",
          700: "#14389e",
          800: "#0b2680",
          900: "#001562"
        },
        accent:  "#c9a84c",
        ink:     "#1f2933",
        paper:   "#f5f7fc"
      },
      fontFamily: {
        sans:  ["Poppins", "Nunito Sans", "Segoe UI", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
