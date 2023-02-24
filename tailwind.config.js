/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs : '240px',
        sm : '480px',
        md : '760px',
        lg : '976px',
        xl : '1440px'
      }
    },
  },

  plugins: [],
};
