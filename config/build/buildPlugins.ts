import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { BuildOptions } from "./types/buildOptions";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
