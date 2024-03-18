import { StoreSchema } from '@/app/providers/store/types/store';
import { buildSelector } from '@/shared/lib/store';

export const [useGetUserAuthData, getUserAuthData] = buildSelector(
  (state: StoreSchema) => state.user.authData,
);
