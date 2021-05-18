const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  //This property defines where the application starts

  entry: "./src/index.js",

  //This property defines the file path and the file name which will be used for deploying the bundled file

  output: {
    path: path.join(__dirname, "/build"),
    filename: '[name].[hash].js',
    publicPath: "/",
  },

  //Setup loaders

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, 
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },

  optimization: {
    runtimeChunk: 'multiple',
    splitChunks: {
      cacheGroups: {
        // vendor: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: 'my3rdPartyVendors',

        //   chunks: 'all',
        // },
        mainVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-loadable|react-router-dom)[\\/]/,
          name: "mainVendors",
          chunks: 'all'
        },
        utilityVendor: {
          test: /[\\/]node_modules[\\/](moment)[\\/]/,
          name: "momentVendor",
          chunks: 'async'
        },
        chartVendor: {
          test: /[\\/]node_modules[\\/](recharts)[\\/]/,
          name: "chartsVendor",
          chunks: 'async'
        },
        calendarVendor: {
          test: /[\\/]node_modules[\\/](react-big-calendar)[\\/]/,
          name: "calendarVendor",
          chunks: 'async'
        },
        
        // common chunk
        // common: {
        //   name: 'common',
        //   minChunks: 5,
        //   chunks: 'async',
        //   priority: 10,
        //   reuseExistingChunk: true,
        //   enforce: true
        // },
      },
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.foo\.css$/i,
      }),
    ],
  },

  devServer: {
    historyApiFallback: true,
    port: 8080,
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true
    }),
  ],
};
