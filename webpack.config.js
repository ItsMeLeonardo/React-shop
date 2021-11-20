const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ruleForJsx = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};
const ruleForCss = {
  test: /\.(css|scss)$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};
const ruleForHtml = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
    },
  ],
};
const ruleForAssets = {
  test: /\.(png|svg|jpg|gif)$/,
  type: "asset",
};
const rulesConfig = [ruleForJsx, ruleForCss, ruleForHtml, ruleForAssets];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: isProduction ? "[name].[contenthash].js" : "bundle.js",
      publicPath: "/",
    },
    mode: "development",
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@containers": path.resolve(__dirname, "src/containers"),
        "@icons": path.resolve(__dirname, "src/assets/icons"),
        "@logos": path.resolve(__dirname, "src/assets/logos"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@routes": path.resolve(__dirname, "src/routes"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@context": path.resolve(__dirname, "src/context"),
        "@services": path.resolve(__dirname, "src/services"),
        "@loaders": path.resolve(__dirname, "src/loaders"),
      },
    },
    module: {
      rules: rulesConfig,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
    devServer: {
      historyApiFallback: true,
      compress: true,
    },
  };
};
