import webpack from 'webpack';
import { BuildOptions } from '../build/types/build';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export function buildLoader({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = buildCssLoader(isDev);

  const svgLoader = buildSvgLoader();

  const assets = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [assets, svgLoader, typescriptLoader, cssLoader];
}
