import { StoreSchema } from '@/app/providers/store';

export const getAddCommentFormText = (state: StoreSchema) =>
  state.addCommentForm?.comment ?? '';
