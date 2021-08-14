// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'), // add tailwindcsss
        require('autoprefixer'), //add as post css plugin
      ],
    },
  },
}