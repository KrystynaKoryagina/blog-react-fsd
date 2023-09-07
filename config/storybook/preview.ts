import { Preview } from '@storybook/react';
import { SuspenseDecorator } from 'shared/config/storybook/decorators/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { i18nDecorator } from '../../src/shared/config/storybook/decorators/i18nDecorator';
import { Theme } from '../../src/shared/lib/contexts/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    theme: Theme.LIGHT,
  },
  decorators: [
    RouterDecorator,
    i18nDecorator,
    SuspenseDecorator,
    ThemeDecorator,
  ],
};

export default preview;
