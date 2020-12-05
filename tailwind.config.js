/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'courgette': ['Courgette', 'cursive']
    },
    extend: {
      colors: {
        'blue-750': '#003668',
        'indigo-1': '#6403e4'
      },
      maxWidth: {
        '7xl': '76rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
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
