/**
 * @name Build development
 * @info Build configuration JSX, JS, SCSS, CSS files!
 * @version 1.0.2-beta-02
 **/

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CONFIG = require("../config");

module.exports = {
  mode: "development",
  entry: [path.resolve(__dirname, "../src/")],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname),
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx"],
    alias: {
      moment$: "moment/moment.js",
      d3$: "d3/d3.min.js"
    }
  },
  externals: [
    {
      remote: "commonjs remote"
    }
  ],
  context: path.resolve(__dirname, "../src/"),
  devtool: process.env.WEBPACK_DEVTOOL || "source-map",
  devServer: {
    hot: true,
    host: CONFIG.client.host,
    port: CONFIG.client.port,
    publicPath: "/",
    contentBase: "/public",
    historyApiFallback: true,
    noInfo: true,
    inline: true,
    clientLogLevel: "info"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "../src/"), path.resolve(__dirname)],
        use: "babel-loader"
      },
      {
        test: /.*\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
          // {
          //     loader: 'postcss-loader',
          //     options: {
          //         plugins: () => [require('autoprefixer')]
          //     }
          // }
        ]
      },

      {
        test: /[\/\\](node_modules)[\/\\].*\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")()]
            }
          }
        ]
      },
      {
        test: /.(png|jpg|jpeg|ico|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{ loader: "url-loader?limit=100000" }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        __DEV__: true
      }
    }),
    new HtmlWebpackPlugin({
      //favicon: '../../public/favicon.ico',
      title: "Application",
      template: path.resolve(__dirname, "../public/index.html")
    })
  ],
  performance: { hints: false }
};
