import { StoreSchema } from '@/app/providers/store';
import { buildSelector } from '@/shared/lib/store';

export const [useGetProfileEditData, getProfileEditData] = buildSelector(
  (state: StoreSchema) => state?.profile?.editData ?? null,
);
