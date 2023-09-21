import { StoreSchema } from '@/app/providers/store';
import { initialState } from '../../slice/profileSlice';

export const getProfileReadOnly = (state: StoreSchema) => state?.profile?.readOnly ?? initialState.readOnly;
