import { StoreSchema } from '@/app/providers/store';
import { buildSelector } from '@/shared/lib/store';

export const [useGetProfileLoading, getProfileLoading] = buildSelector(
  (state: StoreSchema) => state?.profile?.isLoading,
);
