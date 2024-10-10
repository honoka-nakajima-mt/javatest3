import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
       /* @media (min-width: 320px) { ... } */
        mobile: "320px",
       /* @media (min-width: 768px) { ... } */
        tablet: "768px",
       /* @media (min-width: 1025px) { ... } */
        pc: "1025px",
       /* @media (min-width: 1214px) { ... } */
       /* mainコンテンツが870pxを保てるのが1215px以降 */
        lgpc: "1214px",
      },
      backgroundImage: {
        "white-button":
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 80%, #EEEEEE 100%)",
        "light-brown-button":
          "linear-gradient(180deg, #B8A280 0%, #B8A280 80%, #B8A280 100%)",
        "white-gradient":
          "linear-gradient(-90deg, #FFFFFF 0%, #FFFFFF 90%, #EEEEEE 100%)",
      },
      colors: {
        'base-beige': '#eae1d6',
        'accent-beige': '#d2bda6',
        'base-gray': '#555555',
      }
    },
  },
  plugins: [],
};
export default config;
