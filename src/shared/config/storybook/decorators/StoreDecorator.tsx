import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { Store, StoreProvider } from 'app/providers/store';

export const StoreDecorator = ((state?: DeepPartial<Store>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
));
