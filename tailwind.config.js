/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.vue",
    "./src/App.vue"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'bridge-blue': '#1a365d',
        'bridge-light-blue': '#2b4c7e',
        'bridge-accent': '#f6ad55',
        // 微信浏览器深色模式颜色
        'wechat-dark': {
          'bg': '#121212',
          'text': '#e5e7eb',
          'card': '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
} 