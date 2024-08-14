import { redirect } from 'react-router-dom';

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        bg: "#ffffff",
        black: {
          900: "#0d0d0d",
          "900_0c": "#0000000c",
          "900_13": "#00000013",
          "900_33": "#00000033",
          "900_4c": "#0000004c",
          "900_71": "#00000071",
          "900_75": "#00000075",

        },
        blue_gray: {
          50: "#ebedf2",
          100: "#cbe4e8",
          200: "#bec3d1",
          900: "#2f2e30",
          "100_4c": "#d9d9d94c",
          "100_e5": "#d9d9d9e5"
        },
        button: "#000000",
        button1: { 0: "#00ff66", 1: "00ff6699" },
        cyan: { 300: "50ddc3" },
        deep_orange: { a700: "#fa1214" },
        deep_purple: { a200: "#f624af2", a400: "7433ff" },
        error: { dark: "#c20052", darkmode: "#ff83b7", default: "#ed2d7e" },
        gray: { "900_14": "#111111114" },
        grayscale: {
          background: "#f6f7fb",
          body: "#4e4a66",
          input_background: "#eff0f6",
          label: "#6e7191",
          line: "#d9dbe8",
          off_white: "#fcfcfc",
          placeholder: "#a0a3bd",
          title_active: "#14132a",
        },
        indigo: { 200: "#a0bce0" },
        lime: { a100: "#fffa80" },
        orange: { a200: "#ffad33" },
        pink: { a100: "#eb7ea8", a400: "#eb0055" },
        primary1: "#363738",
        primary: { dark: "#2a00a1", darkmode: "#bba4ff", default: "#5e2ee9" },
        purple: { a100: "#" },
        red: { 300: "#e07575", 500: "#ea4335" },
        secondary_2: "#db4444",
        secondary: { dark: "#0095b6", darkmode: "#82e8ff", default: "#1bc8ee", secondary: "#f5f5f5" },
        success: { dark: "#00956d", darkmode: "#34e9b8", default: "#00ba87" },
        teal: { 900: "#184947" },
        text2: { 0: "#0000007f", 1: "#00000066", 2: "#000000b2" },
        text: { 0: "#f9f9f9", 1: "#f9f9f966", 2: "#f9f9f9b2" },
        warning: { dark: "#936100", darkmode: "#ffd688", default: "#f4b740" },
        white: { a700_7f: "#ffffff7f" },
        yellow: { 400: "#eeff61" },


      },
      boxShadow: {},
      fontFamily: { inter1: "Inter", poppins1: "Poppins" },

    },
  },
  plugins: [require("@tailwindcss/forms")],
}