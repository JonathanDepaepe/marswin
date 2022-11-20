/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'main-stretch': '75%',
        'main-page-stretch': '60%',
        '128': '50rem'
      },
      colors: {
        'main-red': '#e6635e',
        'red-hover-background': 'rgba(230, 99, 94, 0.4)',
        'dark-mode-background': '#1C1C27',
        'darker-background': '#16161e',
        'dark-hover-background': '#28293D',
      },
      borderWidth: {
        '0.5': '0.5px'
      },
      dropShadow: {
        'red-button-drop': '0 1px 10px rgba(230, 99, 94, 0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
