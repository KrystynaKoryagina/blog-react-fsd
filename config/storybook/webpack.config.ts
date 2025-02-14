import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/build';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    locales: '',
    buildLocales: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': path.resolve(__dirname, '..', '..', 'src'),
  };

  // NOTE
  // We have to replace SVG loader that storybook uses by default with SVGR
  config!.module!.rules = config!.module!.rules!.map(
    (rule: RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    },
  );

  config!.module!.rules.push(buildSvgLoader());

  config!.module!.rules.push(buildCssLoader(true, paths));

  config!.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.com'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};

/* TODO
Для переключения тем в компонентах
 https://storybook.js.org/addons/@dhruvkb/storybook-addon-themes
*/
