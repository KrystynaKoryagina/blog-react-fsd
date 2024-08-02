import { StoreSchema } from '@/app/providers/store/types/store';
import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useGetJsonSettings, getJsonSettings] = buildSelector(
  (state: StoreSchema) => {
    console.log(
      'state.user.authData?.jsonSettings',
      state.user.authData?.jsonSettings,
    );
    return state.user.authData?.jsonSettings ?? defaultJsonSettings;
  },
);
