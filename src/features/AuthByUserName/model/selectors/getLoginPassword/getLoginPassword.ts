import { StoreSchema } from '@/app/providers/store';
import { initialState } from '../../slice/loginSlice';

export const getLoginPassword = (state: StoreSchema) => (
  state?.login?.password || initialState.password
);
