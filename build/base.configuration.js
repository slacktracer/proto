import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import VueLoaderPlugin from "vue-loader/lib/plugin";
import { DefinePlugin } from "webpack";

import globals from "../config/globals-from-env.json";
import { buildGlobalsObjectFromEnv } from "./build-globals-object-from-env";

export const baseConfiguration = {
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  output: {
    chunkFilename: "[name].[contenthash].js",
    filename: "[name].[contenthash].js",
    path: path.resolve("./dist"),
    publicPath: "/",
  },
  plugins: [
    new DefinePlugin(
      buildGlobalsObjectFromEnv({
        globals,
        target: process.env.TARGET,
      }),
    ),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".js", ".json", ".ts"],
  },
};
