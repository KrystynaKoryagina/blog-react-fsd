import { StoreSchema } from '@/app/providers/store';
import { buildSelector } from '@/shared/lib/store';

export const [useGetProfileValidateErrors, getProfileValidateErrors] =
  buildSelector((state: StoreSchema) => state?.profile?.validateErrors);
