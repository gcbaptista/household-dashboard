/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#667eea',
          50: '#f0f4ff',
          100: '#e0e7ff',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
        },
        secondary: {
          DEFAULT: '#764ba2',
          500: '#764ba2',
          600: '#6b46c1',
        },
        accent: {
          DEFAULT: '#f093fb',
          500: '#f093fb',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea, #764ba2)',
        'gradient-accent': 'linear-gradient(135deg, #f093fb, #f093fb)',
        'gradient-bg': 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      },
    },
  },
  plugins: [],
}
