import { Story } from '@storybook/react';
import { StoreSchema, StoreProvider, ReducersList } from 'app/providers/store';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUserName';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = ((
  state?: DeepPartial<StoreSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
));
