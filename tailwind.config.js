module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // listStyleType: ['hover', 'focus'],
      backgroundColor: ["active"],
      transform: ["active"],
      translate:["active"]
    },
  },
  plugins: [],
};
