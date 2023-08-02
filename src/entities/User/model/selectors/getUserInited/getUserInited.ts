import { StoreSchema } from 'app/providers/store';

export const getUserInited = (state: StoreSchema) => state.user._inited;
