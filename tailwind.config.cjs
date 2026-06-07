module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
      },
    },
    fontFamily: {
      signature: ['Great Vibes'],
    },
  },
  plugins: [],
};
