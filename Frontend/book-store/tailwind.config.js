//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  lightMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'transparent-md': '0 4px 6px -1px rgba(0, 0, 0, 0.0), 0 2px 4px -2px rgba(0, 0, 0, 0.0)',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
