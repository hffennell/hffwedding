/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        serif: 'Bodoni',
        sans: 'Gill Sans',
        bubble: 'Blazing Sun',
        bubbleFilled: 'Blazing Sun Filled',
        bubbleIcon: 'Blazing Sun Icons',
        script: 'Honey and Smoke'
      },
      colors: {
        bg: "#f7f7f0",
        yellow: "#FEE7BC", //"#FFF0CA"
        olive: "#C6C0B2",
        beige: "#AAAA93",
        pink: "#DECACB",
        green: "#F2E9CF",
        blue: "#ACB4B8",
        brightcerise: "#F23333",
        mint: "#CAEAD8",
        oleander: "#F3CBC5"
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite reverse',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
