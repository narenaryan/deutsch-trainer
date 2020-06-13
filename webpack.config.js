// https://github.com/microsoft/TypeScript-Babel-Starter

var path = require('path');

module.exports = {
    // Change to your "entry-point".
    entry: './src/index',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },{
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },{
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          loader: 'url-loader',
          options: {
            limit: 8192,
        }
      }],
    }
};
