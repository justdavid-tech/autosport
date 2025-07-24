/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        'special-color': '#FF5714',
        'hover-color': '#73341a',
        'primary': '#2563eb',
        'dark': '#1e293b',
         'accent': '#f59e0b',
         'dark': '#1f2937',
          'light': '#f3f4f6',
      },
      boxShadow:{
        'special': 'box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'
      }
    },
  },
  plugins: [],
}
