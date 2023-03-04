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
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  if (config?.resolve?.modules) {
    config.resolve.modules.push(paths.src);
  }

  if (config?.resolve?.extensions) {
    config.resolve.extensions.push('.ts', '.tsx');
  }

  if (config?.module?.rules) {
    // NOTE
    // We have to replace SVG loader that storybook uses by default with SVGR
    config.module.rules = config.module.rules.map(
      (rule: RuleSetRule | '...') => {
        if (rule !== '...' && /svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      },
    );

    config.module.rules.push(buildSvgLoader());

    config.module.rules.push(buildCssLoader(true));
  }

  return config;
};

/*
TODO

Ivan Strokov • Чт 06 Окт 10:51 • Ответ создан Ср 05 Окт 10:21
Прекрасный урок, спасибо! Однако созрел небольшой дополнительный вопрос:

Заметил, что в ролике не подключается i18n для storybook, поэтому для полной картины решил добавить сам и столкнулся с проблемой - в основном файле i18n.ts мы используем глобальную переменную IS_DEV, однако при подгрузке файла в storybook теряется доступ к самой переменной.

Пока нашел одно решение, но выглядит как костыль:
добавить файл -> storybook/preview-body.html в котором уже задать необходимые переменные, Выглядит по итогу вот так:

<script>
const IS_DEV = false
</script>
Нравится • Подписаться

Тимур Ульби
Чтобы этой проблемы не было надо в конфиге вебпака сторибука добавить defintePlugin по аналогии с проектом
Чт 06 Окт 2022  2 • Нравится • Подписаться

Dan Pisarev
Да, ошибка все равно позникает, лучше добавить тестовый конфиг i18n для storybook-a, в доке есть пример

*/

/* TODO
Для переключения тем в компонентах
 https://storybook.js.org/addons/@dhruvkb/storybook-addon-themes

*/
