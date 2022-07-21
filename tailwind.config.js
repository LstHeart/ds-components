/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['projects/**/*.{html,ts}','stories/**/*.ts'],
  theme: {
    extend: {
      colors: {
        'default-bg': '#edf2fd',
        'default-focus': '#40a9ff',
        'default-input': '#546e95',
        'default-font': '#546e95',
        'menu-bg': 'rgb(89, 110, 146)',
      },
    },
  },
  plugins: [],
  important: true,
  // prefix: 'tw-',
  // corePlugins: {
  //   preflight: false,
  // }
};
