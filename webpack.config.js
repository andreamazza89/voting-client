module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel' 
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
  output: {
    path: __dirname + '/dist',
    publicPatch: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
