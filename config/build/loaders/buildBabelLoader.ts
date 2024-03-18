import babelRemoveAttrPlugin from '../../babel/babelRemoveAttrPlugin';
import { BuildOptions } from '../types/build';

interface BuildBabelLoaderProps extends BuildOptions {
  isTSX: boolean;
}

export function buildBabelLoader({ isDev, isTSX }: BuildBabelLoaderProps) {
  const isProd = !isDev;

  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTSX,
            },
          ],
          '@babel/plugin-transform-runtime',
          isDev && require.resolve('react-refresh/babel'),
          isTSX &&
            isProd && [
              babelRemoveAttrPlugin,
              {
                props: ['data-testid'],
              },
            ],
        ].filter(Boolean),
      },
    },
  };
}
