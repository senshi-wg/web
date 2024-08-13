import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'senshi-red': '#FF3333',
        'senshi-dark': '#1A1A1A',
        'senshi-light': '#F0F0F0',
        'senshi-accent': '#FFD700',
      },
      fontFamily: {
        'display': ['SupremeSpike', 'sans-serif'],
        'body': ['Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'senshi-bg': "url('/senshi-bg.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
