module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPatch: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
