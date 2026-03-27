import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(admin)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(public)/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006973",
        secondary: "#006973",
        "brand-turquoise": "#04C2BF",
        "on-primary": "#ffffff",
        "surface": "#f9f9ff",
        "on-surface": "#171c24",
        "surface-variant": "#dee2ef",
        "on-surface-variant": "#3d4758",
        "outline": "#6d788a",
        "outline-variant": "#bcc7dc",
        "secondary-container": "#9eeffc",
        "on-secondary-container": "#004f57",
        "tertiary-container": "#d4e3ff",
        "on-tertiary-container": "#224876",
        "surface-container-low": "#f0f3ff",
        "surface-container-lowest": "#ffffff",
      },
      fontFamily: {
        headline: ["var(--font-noto-serif)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
