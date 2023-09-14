import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from '@/shared/lib/contexts/theme';

import '@/app/styles/index.scss';

export const ThemeDecorator = (Story: StoryFn, context?: StoryContext) => {
  const theme = context?.parameters?.theme;

  return (
    <ThemeProvider>
      <div id='app' className={`app ${theme}`}>
        <div style={{ padding: '20px' }}>
          <Story />
        </div>
      </div>
    </ThemeProvider>
  );
};
