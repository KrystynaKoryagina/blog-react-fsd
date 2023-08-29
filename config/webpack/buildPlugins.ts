import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from '../build/types/build';

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  let plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales },
      ],
    }),
  ];

  if (isDev) {
    plugins = [
      ...plugins,
      new ReactRefreshWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    ];
  }

  return plugins;
}
