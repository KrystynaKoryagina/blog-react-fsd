import { StoreSchema } from 'app/providers/store';
import { initialState } from '../../slice/loginSlice';

export const getLoginLoading = (state: StoreSchema) => (
  state?.login?.isLoading || initialState.isLoading
);
