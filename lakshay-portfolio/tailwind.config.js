/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Update based on your folder structure
  theme: {
    extend: {
      screens: {
        'xl-custom': '1700px',
        'lg-custom': '1100px',
        'md-custom': '755px',
      },
    },
  },
  plugins: [],
}
