import { Story } from '@storybook/react';
import { StoreSchema, StoreProvider, ReducersList } from 'app/providers/store';
import { loginReducer } from 'features/AuthByUserName';
import { profileReducer } from 'features/EditProfileCard';

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
