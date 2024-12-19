/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        "zoom-out": {
          "0%": {
            opacity: 1,
          
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(0.5, 0.5, 0.5)",
          },
          "100%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)"
          },
        },
      
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
      },

      animation: {
        zoomIn: 'zoom-in 0.5s ease-out',
        zoomOut: 'zoom-out 0.5s ease-out',
      },
    },

  },
   plugins: [],
}

