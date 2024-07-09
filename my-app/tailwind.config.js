/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/main.tsx",
    "./src/Components/Title.tsx",
    "./src/Components/NavBar.tsx",
    "./src/Sections/Landing.tsx",
    "./src/Sections/Bio.tsx",
    "./src/Sections/Mediation.tsx",
    "./src/Sections/Files.tsx",
    "./src/Sections/Contact.tsx",
    "./src/Components/Footer.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "background-white": "#F5F5F5",
        "accent-blue": "#123354",
        "headline-gray": "#656565",
        "button-text-gray": "#E5E5E5",
        "button-gray": "#F8F6F4",
      },
      fontFamily: {
        cairo: ["Cairo", "san-serif"],
        quattrocento: ["Quattrocento", "serif"],
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widestest: ".4em",
    },
  },
  plugins: [],
};
