/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors');
module.exports = {
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'courgette': ['Courgette', 'cursive'],
      'nunito': ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue-750': '#003668',
        'indigo-1': '#6403e4',
        'blue-90': '#242254',
        'pink-90': '#f3bdd7',
        'fuchsia-90': '#c7a3d8',
        cyan: colors.cyan,
      },
      maxWidth: {
        '7xl': '76rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
