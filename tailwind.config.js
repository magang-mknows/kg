/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    primary: {
      100: "#CDF5FA",
      200: "#9DE6F5",
      300: "#68C6E3",
      400: "#40A0C8",
      500: "#106FA4",
      600: "#0B568D",
      700: "#084076",
      800: "#052E5F",
      900: "#03204E",
    },

    "secondary-yellow": {
      100: "#FEF6D0",
      200: "#FEEAA2",
      300: "#FDDB73",
      400: "#FBCB50",
      500: "#FAB317",
      600: "#D79210",
      700: "#B3740B",
      800: "#905807",
      900: "#774404",
    },

    "secondary-red": {
      100: "#FEDBD7",
      200: "#FDB1AF",
      300: "#F9868F",
      400: "#F4677F",
      500: "#ED3768",
      600: "#CB2864",
      700: "#AA1B5D",
      800: "#891154",
      900: "#710A4E",
    },

    "secondary-green": {
      100: "#E3FBDA",
      200: "#C2F7B6",
      300: "#95E88D",
      400: "#6AD26A",
      500: "#3EB449",
      600: "#2D9A41",
      700: "#1F813A",
      800: "#136832",
      900: "#0B562D",
    },

    neautral: {
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        "marquee-infinite": "marquee 25s linear infinite",
      },
      backgroundImage: {
        landing: "url('/bg-landing.svg')",
      },
    },
  },

  plugins: [],
};
