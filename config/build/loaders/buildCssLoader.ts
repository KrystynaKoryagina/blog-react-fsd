import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildPaths } from '../types/build';

export function buildCssLoader(isDev: boolean, paths: BuildPaths) {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
      // {
      //   loader: 'sass-loader',
      //   options: {
      //     sassOptions: {
      //       includePaths: [paths.src],
      //     },
      //   },
      // },
    ],
  };
}
