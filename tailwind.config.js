/** Shared design tokens. Change colors here only. */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F0F1ED',
        navy: '#B5BDB4',
        deep: '#11120F',
        electric: '#C8E91F',
        cyan: { DEFAULT: '#C8E91F' },
        mist: '#F7F8F5',
        muted: '#64685F',
        slate: '#141510',
      },
      fontFamily: {
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: { card: '20px' },
      boxShadow: {
        glow: '0 0 0 1px rgba(200,233,31,.35), 0 12px 40px -12px rgba(127,151,15,.25)',
      },
    },
  },
  plugins: [],
};
