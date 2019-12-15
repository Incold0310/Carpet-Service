const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
 entry:  './JS/index.js',
 output: {
 path: __dirname + '/dist',
 filename: 'main.js'
 },
 plugins: [
   new HtmlWebpackPlugin({template: "./public/index.html"})
 ]
}
