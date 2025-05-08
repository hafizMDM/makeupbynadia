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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-pink': {
          50: '#FFF0F5',
          100: '#FFE4E1',
          200: '#FFB6C1',
          300: '#FF69B4',
          400: '#FF1493',
          500: '#DB7093',
          600: '#C71585',
          700: '#8B008B',
          800: '#800080',
          900: '#4B0082'
        },
        'brand-neutral': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "soft-pink-gradient": "linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 100%)"
      },
      fontFamily: {
        'nadi': ['BrNadiFont', 'sans-serif']
      },
      boxShadow: {
        'soft-pink': '0 10px 25px -5px rgba(255, 105, 180, 0.2)',
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding'
      }
    },
  },
  plugins: [],
};

export default config;
