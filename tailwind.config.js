/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts}",],
  theme: {
    extend: {
      fontFamily: {
        tegomin: ["'New Tegomin'", "serif"], 
        aladin: ["'Aladin'", "cursive"],
        roboslab: ["'Roboto Slab'", "serif"],
        opensans: ["'Open Sans'", "sans-serif"],
        sedansc: ["'Sedan SC'", "cursive"],
        hinamincho: ["'Hina Mincho'", "serif"],
        allura: ["'Allura'", "cursive"],
        sarabun: ["'Sarabun'", "sans-serif"],
        notoserif: ["'Noto Serif'", "serif"],
        cormorantupright: ["'Cormorant Upright'", "serif"],
        philosopher: ["'Philosopher'", "serif"],
      },
    },
  },
  plugins: [],
}

