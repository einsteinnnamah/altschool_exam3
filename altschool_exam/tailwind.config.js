/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "bg-gradient-to-t from-[#5E3EEB] to-[#FFBAD5]",
      },
      backgroundImage: {
        background_img: "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
