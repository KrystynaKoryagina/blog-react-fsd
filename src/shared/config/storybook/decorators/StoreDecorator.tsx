import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreSchema, StoreProvider } from 'app/providers/store';
import { loginReducer } from 'features/AuthByUserName';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StoreSchema>> = {
  login: loginReducer,
};

export const StoreDecorator = ((
  state?: DeepPartial<StoreSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
));
