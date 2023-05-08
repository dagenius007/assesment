/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "Poppins"],
    },
    extend: {
      colors: {
        red: "#ff385c",
        "light-grey": "#717171",
        "grey": "rgba(17, 17, 17, 0.1)",
        "overlay": "rgba(17, 17, 17, 0.4)"
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        cards: "repeat(4, minmax(200px, 1fr))",
      },
      height: {
        '18': '4.5rem',
        '50': '12.5rem',
        '120': '30rem',
      },
      width: {
        '22': '5.5rem',
        '90': '22.5rem',

      },
      flex: {
        'unique': '1 0 0'
      }
    },
  },
  plugins: [],
};
