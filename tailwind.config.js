/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/comps/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-header-d":
          "linear-gradient(100deg, #CCE3EBff, #B0C7D2ff, #93AAB8ff, #778E9Fff, #5A7286ff, #3E556Cff, #213953ff)",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      fontFamily: {
        searchBarTitle: ["Lora", "sens serif"],
      },
      colors: {
        "light-blue": "#CCE3EB",
        "dark-blue": "#213953",
        "form-blue": "#13054851",
      },
      height: {
        menuItemHeight: "calc(100% - 1px)",
      },
    },
  },
  plugins: [],
};
