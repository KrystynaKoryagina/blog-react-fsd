import { addDecorator, Parameters } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { Theme } from '../../src/shared/lib/contexts/theme';

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

addDecorator(ThemeDecorator);
addDecorator(RouterDecorator);
