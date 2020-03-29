import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin } from "webpack";
import webpackMerge from "webpack-merge";

import globals from "../config/globals-from-env.json";
import { baseConfiguration } from "./base.configuration";
import { buildGlobalsObjectFromEnv } from "./build-globals-object-from-env";

const productionConfiguration = {
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin(
      buildGlobalsObjectFromEnv({
        globals,
        target: process.env.TARGET,
      }),
    ),
    new MiniCssExtractPlugin({
      chunkFilename: "[name].[contenthash].css",
      filename: "[name].[contenthash].css",
    }),
  ],
};

export default webpackMerge(baseConfiguration, productionConfiguration);
