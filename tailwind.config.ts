import type { Config } from "tailwindcss";

export default {
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
        primary: {
          50: 'rgba(54, 73, 255, 0.1)',
          100: 'rgba(54, 73, 255, 0.15)',
          500: '#3649FF'
        },
        neutral: {
          100: '#EEF4FF',
          200: '#1A202C'
        }
      },
      fontSize: {
        h0: ['52px', '64px'],
        h1: ['40px', '48px'],
        h2: ['32px', '40px'],
        h3: ['24px', '32px'],
        p0: ['24px', '40px'],
        p1: ['16px', '28px'],
        p2: ['14px', '28px'],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'medium': '1480px',
        'medium-small': '1000px',
        'xs': '440px',
      },
      scale: {
        '101': '1.01',
      },

    },
  },
  plugins: [],
} satisfies Config;
