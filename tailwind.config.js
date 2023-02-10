/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{themes: [
    {
      mytheme: {
        primary: "#0FCFEC",
        secondary: "#19D3AE",
        accent: "#3A4256",
        neutral: "#3d4451",
        "base-100": "#ffffff",
        "black":"#000"
      },
    },
    "dark",
    "cupcake",
  ],
  theme: {
    extend: {
       fontSize: {
         xs: "0.75rem",
         sm: "0.875rem",
         base: "1rem",
         lg: "1.125rem",
         xl: "1.25rem",
         "2xl": "1.5rem",
         "3xl": "1.875rem",
         "4xl": "2.25rem",
         "5xl": "3rem",
         "6xl": "4rem",
       },
    }
 },
},
  plugins: [require("daisyui")],
}
