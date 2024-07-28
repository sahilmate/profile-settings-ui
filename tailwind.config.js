// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.html", // Ensure it matches all HTML files in src
    "./src/**/*.js",   // Include this if you have JS files in src later
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
