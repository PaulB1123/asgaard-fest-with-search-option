module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        acier: ["acier", "sans-serif"],
        aciersolid: ["acier-solid", "sans-serif"],
      },
      fontSize: {
        "5.5xl": "3.5rem",
        smallRem: "0.6rem",
      },
      colors: {
        "concert-yellow": "#FBCE30",
        "concert-pink": "#F280B6",
        "concert-b-green": "#09E970",
        "concert-l-green": "#23D398",
        "concert-redish": "#FF7A74",
        "concert-blue": "#05AFF2",
        "concert-yellowish": "#FFF9E7",
        "concert-l-dark": "#171717",
        "concert-red-dark": "#975072",
        "concert-bg": "#FFF9E7",
        "concert-orange": "#F75B00",
      },
      important: true,
      spacing: {
        26: "6.5rem",
        40.5: "10.5rem",
        0: "0rem",
      },
      lineHeight: {
        "extra-loose": "0.1rem",
        12: "0.1rem",
      },
      screens: {
        tablet: "860px",
        phone: "530px",
        smallphone: "420px",
      },
    },
    borderWidth: {
      3: "3px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
