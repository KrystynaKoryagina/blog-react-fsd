import { StoreSchema } from '@/app/providers/store';
import { buildSelector } from '@/shared/lib/store';

export const [useGetProfileError, getProfileError] = buildSelector(
  (state: StoreSchema) => state?.profile?.error,
);
