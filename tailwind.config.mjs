/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blueP: '#0057A0',
        blueS: '#4A90E2',
        whiteP: '#F5F5F5',
        grayP: '#4A4A4A',
        blackP: '#1A1A1A',
        titleBlue: '#213c64',
      },
    },
  },
  plugins: [],
};
