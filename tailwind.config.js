/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mainvisual':"url('/mainvisual.webp')",
        'chair':"url('/chair.jpeg')",
        'meido':"url('/meido.webp')",
        'kumitoru':"url('/kumitoru.webp')",
        'pc':"url('/pc.jpeg')",
        'fx':"url('/fx.jpeg')",
        'denwa':"url('/denwa.jpeg')",
        'suit':"url('/suit.jpeg')",
      },
    },
  },
  plugins: [],
}
