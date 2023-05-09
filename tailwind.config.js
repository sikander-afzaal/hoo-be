const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--poppins)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#78c4cb",
        paleGray: "#ededed",
        offWhite: "#f6f6f6",
        lightGray: "#cacaca",
      },
    },
  },
  plugins: [],
};
