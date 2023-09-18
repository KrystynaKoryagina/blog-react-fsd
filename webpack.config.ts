import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/build';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';

// NOTE webpack Environment Variables
// https://webpack.js.org/guides/environment-variables/

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development';

  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project: 'frontend',
  });

  return config;
};
