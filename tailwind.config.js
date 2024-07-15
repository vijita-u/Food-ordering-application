/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Dancing Script", "cursive"],
        body: ["Lato", "sans-serif"],
      },
      colors: {
        accent: "#fb9334",
        background: "#fff5f4",
      },
    },
  },
  plugins: [],
};
