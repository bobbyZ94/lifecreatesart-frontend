/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        indieFlower: ['Indie-Flower']
      },
    },
  },
  daisyui: {
    themes: [
      {
        cmyk: {
          ...require("daisyui/src/colors/themes")["[data-theme=cmyk]"],
          "neutral": "#c0d3fa",
          "base-100": "#dae6ff",
        },
      }
      // {
      //   mytheme: {
      //     "primary": "red",
      //     "secondary": "#6b7280",
      //     "accent": "#0284c7",
      //     "neutral": "#c0d3fa",
      //     "base-100": "#dae6ff",
      //     "info": "#d1d5db",
      //     "success": "#36D399",
      //     "warning": "#FBBD23",
      //     "error": "#ef4444",
      //   },
      // },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require('@tailwindcss/line-clamp'), require('tailwind-scrollbar'), require("daisyui")],
}
