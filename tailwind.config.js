/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ({ matchComponents, theme }) => {
      matchComponents(
        {
          "truncate": (value) => ({
            display: "-webkit-box !important",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": value, /* Number of lines to show */
            overflow: "hidden",
          })
        },
        {
          values: theme("truncate"),
        }
      );
    }
  ],
}
