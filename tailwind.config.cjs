/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["hidden", "block", "bg-[#523857]"],
  theme: {
    extend: {
      maxWidth: {
        blog: "832px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
