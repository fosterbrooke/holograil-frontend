import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssFontInter from 'tailwindcss-font-inter';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B4099', // Custom Primary Color
        secondary: '#15357D', // Custom Secondary Color
        'dark-gray': '#595959',
        'warm-gray': '#F8F8ED',
        'dark-blue': '#043873',
        gray: '#D9D9D9',
        'custom-blue': '#89CAFF', // Custom color 2
        'custom-light-blue': '#CAE4F9',
        'custom-pink': '#DB92D4', // Custom color 1
        'custom-orange': '#FD9330', // Custom color 3
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'custom-image-card': '0 0 124px rgba(178, 191, 248, 1)',
        custom: '0 50px 25px -24px rgb(0 0 0 / 0.3)',
        'custom-multiple': `
          0 0 50px rgba(0, 0, 0, .1),
          0 0 100px rgba(0, 0, 0, .1)
        `,
        'custom-card': `
          0 0 20px rgba(0, 0, 0, .1),
          0 0 40px rgba(0, 0, 0, .1),
          0 0 60px rgba(0, 0, 0, .1),
          0 0 80px rgba(0, 0, 0, .1)
        `,
      },
    },
  },
  plugins: [tailwindcssFontInter],
};
