import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "antique-white": "#FCF5EF",
        "orange-yellow": "#FEA734",
        "dark-orange-yellow": "#C2812A",
        "red-orange": "#FF7B41",
        "dodger-blue": "#01C3FF",
        "royal-blue": "#355085",
        "dark-blue": "#1B1A35",
        azure: "#0077FF",
      },
      boxShadow: {
        "effect-1": "0px 5px 7px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
};
