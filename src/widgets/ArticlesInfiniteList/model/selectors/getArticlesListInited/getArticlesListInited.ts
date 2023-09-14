import { StoreSchema } from '@/app/providers/store';

export const getArticlesListInited = (state: StoreSchema) => !!state.articlesList?._inited;
