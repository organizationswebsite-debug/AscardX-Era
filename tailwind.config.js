/** Design tokens from the master prompt, section 3. Change colors here only. */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071426',        // primary background
        navy: '#0B1E35',       // secondary background
        deep: '#0B2D59',       // deep blue
        electric: '#0866E8',   // electric blue
        cyan: { DEFAULT: '#19B8FF' },
        mist: '#F5F8FC',       // light background
        muted: '#A9B7C8',      // muted text
        slate: '#101C2D',      // dark text
      },
      fontFamily: {
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: { card: '20px' },
      boxShadow: {
        glow: '0 0 0 1px rgba(25,184,255,.35), 0 12px 40px -12px rgba(8,102,232,.55)',
      },
    },
  },
  plugins: [],
};
