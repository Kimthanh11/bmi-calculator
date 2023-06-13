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
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px" },
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};
