// tailwind.config.js (ESM style)
import scrollbarHide from 'tailwind-scrollbar-hide'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 0.3s ease-in-out",
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      transitionDelay: {
        75: "75ms",
        150: "150ms",
        225: "225ms",
        300: "300ms",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
         satoshi: ['"Satoshi"', 'sans-serif'],
          archivo: ["Archivo", "sans-serif"],
          inter: ['Inter', 'sans-serif'],
           Arima: ['"Arima"', "cursive"],
      },
      colors: {
      primary: '#3D0D84',
      cardBg: '#DCD4FF',
    },
     borderRadius: {
      'xl': '1.25rem' // match reference image corner
    }
    
    },
  },
  plugins: [scrollbarHide],
};
