import { addDecorator, Parameters } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { i18nDecorator } from '../../src/shared/config/storybook/decorators/i18nDecorator';
import { Theme } from '../../src/shared/lib/contexts/theme';
import { SuspenseDecorator } from 'shared/config/storybook/decorators/SuspenseDecorator';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theme: Theme.LIGHT,
};

addDecorator(RouterDecorator);
addDecorator(i18nDecorator);
addDecorator(SuspenseDecorator);

// @ts-ignore
// TODO https://github.com/storybookjs/testing-react/issues/61
addDecorator(ThemeDecorator);
