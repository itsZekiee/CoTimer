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
        teal: {
          50: '#f0f9f9',
          100: '#d9f2f2',
          200: '#b5e3e3',
          300: '#86cece',
          400: '#52aeae',
          500: '#388e8e',
          600: '#2d7474',
          700: '#285e5e',
          800: '#254e4e',
          900: '#224242',
          950: '#0f2626',
        },
        primary: {
          DEFAULT: "#006d6d",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
}
