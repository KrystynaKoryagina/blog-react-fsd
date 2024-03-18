import { StoreSchema } from '@/app/providers/store';
import { initialState } from '../../slice/loginSlice';

export const getLoginUsername = (state: StoreSchema) =>
  state?.login?.username || initialState.username;
