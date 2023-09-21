import { Preview } from '@storybook/react';
import { SuspenseDecorator } from '../../src/shared/config/storybook/decorators/SuspenseDecorator';
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
    // theme: Theme.LIGHT,
    layout: 'fullscreen',
    themes: {
      default: Theme.LIGHT,
      list: [
        { name: 'light', class: Theme.LIGHT, color: '#e8e8ea' },
        { name: 'dark', class: Theme.DARK, color: '#090949' },
      ],
    },
  },
  decorators: [
    RouterDecorator,
    i18nDecorator,
    SuspenseDecorator,
    ThemeDecorator,
  ],
};

export default preview;
