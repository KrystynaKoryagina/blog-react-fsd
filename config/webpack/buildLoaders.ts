import webpack from 'webpack';
import { BuildOptions } from '../build/types/build';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';

export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = buildCssLoader(options.isDev);

  const svgLoader = buildSvgLoader();

  const assets = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  };

  const babelLoader = buildBabelLoader({ ...options, isTSX: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTSX: true });

  // TODO remove 'ts-loader'
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // };

  return [assets, svgLoader, babelLoader, tsxBabelLoader, cssLoader];
}
