import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'cabinet': ['Cabinet Grotesk', 'Cabinet Grotesk Placeholder', 'sans-serif'],
        'cabinet-bold': ['Cabinet Grotesk', 'sans-serif'],
      },
      fontSize: {
        'custom': '24px',
      },
      lineHeight: {
        'custom': '36px',
      },
      letterSpacing: {
        'normal': '0em',
      },
      spacing: {
        'paragraph': '40px',
      },
      textColor: {
        'custom-white': '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
