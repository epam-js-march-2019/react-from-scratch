const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
};
