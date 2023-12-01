/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "login-bg" : "url('../assets/images/background_image.jpg')"
      }
    },
  },
  plugins: [],
}

