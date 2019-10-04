const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "../src")
  },
  resolve: {
    modules: ["node_modules", "src"]
  },
  output: {
    filename: `[chunkhash].min.js`,
    path: path.resolve(__dirname, "../dist")
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "node_modules")
        ],
        use: "babel-loader"
      },
      {
        test: /.*\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")]
              }
            }
          ]
        })
      },
      {
        test: /.*\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")]
              }
            }
          ]
        })
      },
      {
        test: /.(woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader?limit=100000"
          }
        ]
      },
      {
        test: /.(png|jpg|jpeg|ico|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[chunkhash].min.css`,
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      filename: "index.html",
      title: "Calendar",
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      threshold: 10240,
      minRatio: 0
    }),
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin()
  ]
};
