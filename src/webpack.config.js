const path = require('path');

module.exports = {
  // Other Webpack configurations like entry, output, etc.
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // File extensions Webpack will resolve
    alias: {
      components: path.resolve(__dirname, 'src/Components/Blogs'), // Create an alias for the components directory
    },
  },
  devServer: {
    contentBase: './dist',
  },
};
