import { Story } from '@storybook/react';
import { StoreSchema, StoreProvider, ReducersList } from '@/app/providers/store';
import { articleReducer } from '@/entities/Article/model/slice/articleSlice';
import { loginReducer } from '@/features/AuthByUserName';
import { profileReducer } from '@/features/EditProfileCard';

// TODO вспомнить что тут делали
const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
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
