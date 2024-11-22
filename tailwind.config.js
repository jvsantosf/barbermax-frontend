/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-text': '#ccc5b2',
        'primary': '#ACADBC',
        'default': '#473BF0',
        secondary: {
          100: '#9B9ECE',
          300: '#6665DD',
          500: '#473BF0',
          800: '#000500'
        }
      },
      fontFamily: {
        text: ['Parkinsans', 'ui-sans-serif', 'system-ui'],
        title: ['Raleway', 'ui-sans-serif', 'system-ui'],
        offtext: ['Martel Sans', 'ui-sans-serif', 'system-ui']
      },
    }
  },
  plugins: [],
}