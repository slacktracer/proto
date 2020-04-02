import { DefinePlugin } from "webpack";
import webpackMerge from "webpack-merge";

import globals from "../config/globals-from-env.json";
import { baseConfiguration } from "./base.configuration";
import { buildGlobalsObjectFromEnv } from "./build-globals-object-from-env";

const developmentConfiguration = {
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    port: process.env.PORT,
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new DefinePlugin(
      buildGlobalsObjectFromEnv({
        globals,
        target: process.env.TARGET,
      }),
    ),
  ],
};

export default webpackMerge(baseConfiguration, developmentConfiguration);
