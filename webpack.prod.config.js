module.exports = {
  mode: "production",
  entry: {
    app: ["./src/App.tsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:4].js",
    chunkFilename: '[name].[chunkhash:4].js',
  }
};
