/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: {
          DEFAULT: "#86A789",
          50: "#B2C8BA",
          100: "#D2E3C8",
          200: "#EBF3E8",
        },
      },
      fontFamily: {
        chanchai: ['Chonburi', 'sans-serif'],
        Ephesis: ['Ephesis', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        herr_Von_Muellerhoff: ['Herr_Von_Muellerhoff', 'sans-serif'],
        lovers_Quarrel: ['Lovers_Quarrel', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
