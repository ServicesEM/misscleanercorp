tailwind.config = {
  content: [
    './**/*.html',
    './**/*.php',
    './**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lato', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif']
      },
      colors: {
        mc: {
          primary: 'rgb(var(--mc-primary-rgb) / <alpha-value>)',
          secondary: 'rgb(var(--mc-secondary-rgb) / <alpha-value>)',
          accent1: 'rgb(var(--mc-accent-1-rgb) / <alpha-value>)',
          accent2: 'rgb(var(--mc-accent-2-rgb) / <alpha-value>)',
          text: {
            base: 'rgb(var(--mc-text-base-rgb) / <alpha-value>)',
            soft: 'rgb(var(--mc-text-soft-rgb) / <alpha-value>)'
          },
          bg: {
            main: 'rgb(var(--mc-bg-main-rgb) / <alpha-value>)',
            soft: 'rgb(var(--mc-bg-soft-rgb) / <alpha-value>)'
          },
          border: 'rgb(var(--mc-border-rgb) / <alpha-value>)'
        }
      },
      borderRadius: { sm: '4px', md: '8px', lg: '16px' },
      boxShadow: { mc: '0 2px 6px 0 rgb(0 0 0 / 0.08)' },
      screens: { '3xl': '1800px', '4xl': '2400px', '5xl': '3000px' }
    }
  },
  plugins: []
};
