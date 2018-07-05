const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: ['./src/main.js'],
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    publicPath: '/' //https://github.com/webpack/webpack-dev-server/issues/851#issuecomment-399227814
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
}
