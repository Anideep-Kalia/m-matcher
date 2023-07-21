module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },

        secondary: {
          50: "#e6f2ff",
          100: "#cce0ff",
          200: "#99bfff",
          300: "#66a3ff",
          400: "#3399ff",
          500: "#007fff",
          600: "#0066cc",
          700: "#004c99",
          800: "#003366",
          900: "#001a33"
        },
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      boxShadow: {
        material: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        material2:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      },
    },
  },
  plugins: [],
};
