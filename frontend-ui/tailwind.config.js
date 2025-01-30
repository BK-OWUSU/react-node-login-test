/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html", 
    "./src/**/*.{ts,tsx,js,jsx}",
    flowbite.content()
   ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin()
  ],
}

