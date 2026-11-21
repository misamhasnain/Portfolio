/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Semantic tokens: values live in src/styles/theme.css (light + dark)
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        // Accents (Tailwind's built-in `blue` and `violet` scales are also available)
        brand: {
          blue: 'rgb(var(--color-blue) / <alpha-value>)',
          violet: 'rgb(var(--color-violet) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, rgb(var(--color-blue)) 0%, rgb(var(--color-violet)) 100%)',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgb(var(--color-shadow) / 0.18)',
        glow: '0 0 40px -8px rgb(var(--color-violet) / 0.45)',
      },
    },
  },
  plugins: [],
}
