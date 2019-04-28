const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/App.tsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    chunkFilename: 'js/[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial"
        }
      }
    }
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index-template.hbs"),
      filename: "index.html",
      title: "WIP",
      inject: "body",
      description: "Something good"
    })
  ]
};
