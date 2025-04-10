/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff0f5',     // soft pink
        rose: '#c2185b',        // rose accent
        navy: '#2c3e50',        // dark text
      },
    },
  },
  plugins: [],
}
