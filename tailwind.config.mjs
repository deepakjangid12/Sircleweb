// import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        orbit: 'orbit 40s linear infinite',
        orbit2:'orbit2 40s linear infinite'
      },
      keyframes: {
        
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(200px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(200px) rotate(-360deg)',
          },
        },
        orbit2: {
          '0%': {
            transform: 'rotate(0deg) translateX(125px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(125px) rotate(-360deg)',
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Title: ["IBM Plex Sans", "serif"],
        Title2:['Hurricane',"cursive"]
      }
    },
  },
  plugins: [],
};
