import { Story, StoryContext } from '@storybook/react';
import { ThemeProvider } from 'shared/lib/contexts/theme';

import 'app/styles/index.scss';

export const ThemeDecorator = (StoryComponent: Story, context?: StoryContext) => {
  const theme = context?.parameters?.theme;

  return (
    <ThemeProvider>
      <div id='app' className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
