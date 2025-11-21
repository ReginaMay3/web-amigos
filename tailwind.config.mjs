import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animations // <-- El plugin v3
  ],
}