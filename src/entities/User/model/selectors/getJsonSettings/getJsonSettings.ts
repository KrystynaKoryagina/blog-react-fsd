import { StoreSchema } from '@/app/providers/store/types/store';
import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useGetJsonSettings, getJsonSettings] = buildSelector(
  (state: StoreSchema) =>
    state.user.authData?.jsonSettings ?? defaultJsonSettings,
);
