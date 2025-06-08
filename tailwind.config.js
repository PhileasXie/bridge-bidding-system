/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bridge-blue': '#1a365d',
        'bridge-light-blue': '#2b4c7e',
        'bridge-accent': '#f6ad55',
      },
    },
  },
  plugins: [],
} 