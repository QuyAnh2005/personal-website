/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            h1: {
              marginTop: '2em',
              marginBottom: '0.5em',
            },
            h2: {
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h3: {
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            pre: {
              backgroundColor: '#1e293b',
              color: '#e2e8f0',
              padding: '1rem',
              borderRadius: '0.5rem',
            },
            code: {
              backgroundColor: '#f1f5f9',
              color: '#334155',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#2563eb',
              },
            },
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
