export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 48px rgba(54, 76, 116, 0.10)',
        'soft-dark': '0 18px 48px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
