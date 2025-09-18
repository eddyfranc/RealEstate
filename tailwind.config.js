// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",            // Include index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Support TS + TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
