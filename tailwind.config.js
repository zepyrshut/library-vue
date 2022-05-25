module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Scheme 1
        "baby-blue": "#88CCF1",
        "columbia-blue": "#C1DFF0",
        "blue-munsell": "#3587A4",
        "metallic-seaweed": "#2D848A",
        "dark-cyan": "#2D898B",

        // Scheme 2
        "french-lilac": "#966B9D",
        "old-rose": "#C98686",
        "mellow-apricot": "#F2B880",
        "seashell-c": "#FFF4EC",
        "champagne-pink": "#E7CFBC",
      },
    },
  },
  plugins: [],
};
