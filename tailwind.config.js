const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      main: '#FF9B44',
      primary: '#FC6075',
      secondary: '#ffffff'
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}