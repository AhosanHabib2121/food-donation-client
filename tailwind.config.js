/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      fontFamily: {
        robotFont: 'Roboto, sans-serif ',
      }
    },
    daisyui: {
      themes: ["dark", "light"],
    },
  },
 plugins: [require("daisyui")],
}

