import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          dark: '#0f1f3a',
        },
        accent: {
          DEFAULT: '#2d5f4f',
          light: '#3d7f6f',
        },
      },
    },
  },
  plugins: [],
}
export default config
