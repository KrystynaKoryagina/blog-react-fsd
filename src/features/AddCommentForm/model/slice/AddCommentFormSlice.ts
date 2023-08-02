import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormStore } from '../type/AddCommentFormStore';

const initialState: AddCommentFormStore = {
  comment: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
