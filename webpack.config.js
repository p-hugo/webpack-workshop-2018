const webpack = require("webpack"); // default builtin plugins
const htmlWebpackPlugin = require("html-webpack-plugin"); // external plugin
module.exports = env => {
  return {
    mode: env.mode,
    output: {
      filename: "bundle.js"
    },
    plugins: [new htmlWebpackPlugin(), new webpack.ProgressPlugin()]
  };
};
