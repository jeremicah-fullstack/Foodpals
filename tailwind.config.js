/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        textLink: "#959895",
        dirty: "#FDFDF9",
      },
      margin: {
        mainM: "85px",
      },
      padding: {
        mainP: "2rem",
      },
      width: {
        mainW: "90%",
        60: "60%",
        50: "50%",
        40: "40%",
        30: "30%",
      },
      height: {
        mainHs: "90%",
        60: "60%",
        50: "50%",
        40: "40%",
        30: "30%",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontSize: {
      title: "3rem",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    backgroundImage: {
      banner: "url('/bg-1.jpg')",
      slide1: "url('/slide1.jpg')",
      slide2: "url('/slide2.jpg')",
      slide3: "url('/slide3.jpg')",
      slide4: "url('/slide4.jpg')",
      slide5: "url('/slide5.jpg')",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
