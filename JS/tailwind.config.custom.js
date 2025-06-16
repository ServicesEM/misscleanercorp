/** @type {import('tailwindcss').Config} */
module.exports = {
  /*
   |-----------------------------------------------------------------------
   | 1.  Paths to all templates – so PurgeCSS can strip unused classes   |
   |-----------------------------------------------------------------------
   */
  content: [
    './**/*.{html,js,jsx,ts,tsx,php,vue}', // adjust to your stack
  ],

  /*
   |-----------------------------------------------------------------------
   | 2.  Core theme tokens (fonts, colors, radii)                         |
   |-----------------------------------------------------------------------
   */
  theme: {
    fontFamily: {
      primary: ['Lato', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif'],
    },

    /*
     | Custom color palette – mirrors your :root variables
     | Access as:  bg-mc-primary  text-mc-text-soft  etc.
     */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      mc: {
        primary:  '#2bb6c1',
        secondary:'#dc5e97',
        accent1:  '#ffd60a',
        accent2:  '#6464ff',
        text:   { base:'#212121', soft:'#595959' },
        bg:     { main:'#ffffff', soft:'#f5f5f5' },
        border:  '#e6e6e6',
      },
      white:   '#ffffff',
      black:   '#000000',
    },

    extend: {
      /*
       | Box-shadow & border-radius used across components
       */
      boxShadow: {
        mc: '0 2px 6px rgba(0,0,0,.08)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      },

      /*
       | Extra breakpoints (keep only what you need)
       */
      screens: {
        '3xl': '1800px',
        '4xl': '2400px',
        '5xl': '3000px',
      },
    },
  },

  /*
   |-----------------------------------------------------------------------
   | 3.  Plugins – none needed for now                                    |
   |-----------------------------------------------------------------------
   */
  plugins: [],
};
