import babelRemoveAttrPlugin from '../../babel/babelRemoveAttrPlugin';
import { BuildOptions } from '../types/build';

interface BuildBabelLoaderProps extends BuildOptions {
  isTSX: boolean
}

export function buildBabelLoader({ isDev, isTSX }: BuildBabelLoaderProps) {
  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            // TODO check extractedTranslations folder
            // Урок 17 Babel. Extract plugin [optional]
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
              saveMissing: true,

            },
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTSX,
            },
          ],
          '@babel/plugin-transform-runtime',
          isDev && require.resolve('react-refresh/babel'),
          isTSX && !isDev && [
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
