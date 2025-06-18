tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lato', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      colors: {
        mc: {
          primary: "#2bb6c1",
          secondary: "#dc5e97",
          "accent-1": "#ffd60a",
          "accent-2": "#6464ff",
          text: {
            base: "#212121",
            soft: "#595959",
          },
          bg: {
            main: "#ffffff",
            soft: "#f5f5f5",
          },
          border: "#e6e6e6",
        },
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      boxShadow: {
        mc: "0 2px 6px rgba(0, 0, 0, 0.08)",
      },
      screens: {
        "3xl": "1800px",
        "4xl": "2400px",
        "5xl": "3000px",
      },
      transitionProperty: {
        all: 'all',
      },
      translate: {
        '0': '0',
        full: '100%',
        '-full': '-100%',
      },
      opacity: {
        '0': '0',
        '100': '1',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
      }
    },
  },
}
