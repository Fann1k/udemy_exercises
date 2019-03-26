const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/script.js',
    output:{
    filename: 'bundle.js'
},
    watch: true,
    
    devtool: 'source-map',
    module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
},
      plugins: [
    new UglifyJsPlugin()
  ]
};