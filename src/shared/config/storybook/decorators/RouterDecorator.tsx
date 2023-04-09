import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';

export const RouterDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading</div>}>
      <StoryComponent />
    </Suspense>
  </BrowserRouter>
);
