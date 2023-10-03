/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('assets/images/login-background.jpg')",
      },

      keyframes: {
        fadeIn: {
          from: { 
            opacity: '0',
            transform: "scale(0.5)" 
          },
          to: { 
            opacity: '1',
            transform: "scale(1.0)" 
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 400ms ease-in-out",
      },
    },
  },
  plugins: [],
}