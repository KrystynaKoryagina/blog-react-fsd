import { StoryFn } from '@storybook/react';
import {
  StoreSchema,
  StoreProvider,
  ReducersList,
} from '@/app/providers/store';

import { loginReducer } from '@/features/AuthByUserName';
import { profileReducer } from '@/features/EditProfileCard';
// TODO imports
import { articleCommentsReducer } from '@/widgets/ArticleComments/model/slice/articleCommentsSlice';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/AddCommentFormSlice';
import { articlesListReducer } from '@/widgets/ArticlesList';
import { articleReducer } from '@/entities/Article/model/slice/articleSlice';

// TODO вспомнить что тут делали
const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articleComments: articleCommentsReducer,
  addCommentForm: addCommentFormReducer,
  articlesList: articlesListReducer,
};

export const StoreDecorator =
  (state?: DeepPartial<StoreSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
