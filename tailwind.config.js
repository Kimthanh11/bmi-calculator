/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        "extra-none": "1.1",
      },
      colors: {
        blue: "#345FF6",
        gunmental: "#253347",
        darkblue: "#5E6E85",
        borders: "#D8E2E7",
      },
      screens: {
        xs: "375px",
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: "767px",
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
      boxShadow: {
        box: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
        hero: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
      },
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(315deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
