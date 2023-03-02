import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPath } from './config/webpack/types/config';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
