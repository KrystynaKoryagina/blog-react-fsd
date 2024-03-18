import { StoreSchema } from '@/app/providers/store';
import { initialState } from '../../slice/profileSlice';
import { buildSelector } from '@/shared/lib/store';

export const [useGetProfileReadOnly, getProfileReadOnly] = buildSelector(
  (state: StoreSchema) => state?.profile?.readOnly ?? initialState.readOnly,
);
