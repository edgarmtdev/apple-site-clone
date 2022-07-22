const postcss = require('postcss-cssnext');

module.exports = {
  plugins: [
    require('postcss-mixins'),
    require('autoprefixer')
  ]
};