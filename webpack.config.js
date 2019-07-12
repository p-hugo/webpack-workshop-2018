const webpack = require("webpack"); // default builtin plugins
const htmlWebpackPlugin = require("html-webpack-plugin"); // external plugin
const path = require("path");
module.exports = ({ mode }) => {
  return {
    mode,
    output: {
      filename: "bundle.js"
    },
    plugins: [new htmlWebpackPlugin(), new webpack.ProgressPlugin()],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    },
    optimization: {
      namedModules: true,
      namedChunks: true
    }
  };
};
