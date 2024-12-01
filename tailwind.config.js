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
        primary: "#14B8A6",
        dark: "#1E293B",
        light: "#64748B",
        redtext: "#EF4444",
        backgroundLight: "#F8FAFC",
        boxLight: "#F1F5F9",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1024px",
        lg: "1240px",
      },
    },
  },
  plugins: [],
};
