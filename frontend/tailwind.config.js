/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        primary: {
          DEFAULT: "#0D9488",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
}
