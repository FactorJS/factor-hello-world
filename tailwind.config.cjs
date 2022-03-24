module.exports = {
  mode: "jit",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  plugins: [require("@tailwindcss/forms")],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          50: "#f6f5ff",
          100: "#eeebff",
          200: "#d4ccff",
          300: "#baadff",
          400: "#8670ff",
          500: "#5233ff",
          600: "#4a2ee6",
          700: "#3e26bf",
          800: "#311f99",
          900: "#211c36",
        },
      },
    },
  },
};
