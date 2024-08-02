import { StoreSchema } from './../../../app/providers/store/types/store';
import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkQuery';
import {
  getArticlesListCategory,
  getArticlesListOrder,
  getArticlesListSearch,
  getArticlesListSort,
} from '@/widgets/ArticlesList';
import { getArticlesListPage } from '@/widgets/ArticlesList/model/selectors/getArticlesListPage/getArticlesListPage';

const articlesRecommendedListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // getRecommendedArticles: build.query<Article[], number>({
    //   query: (limit) => ({
    //     url: '/articles',
    //     params: {
    //       _limit: limit,
    //       _expand: 'user',
    //     },
    //   }),
    // }),
    getRecommendedArticles: build.query<Article[], number>({
      // queryFn: (limit, { getState }, extraOptions, baseQuery) => {
      //   console.log(
      //     'getState',
      //     getArticlesListOrder(getState() as StoreSchema),
      //   );

      //   return baseQuery({
      //     url: '/articles',
      //     params: {
      //       _limit: limit,
      //       _expand: 'user',
      //     },
      //   });
      // },
      queryFn: async (limit, { getState }) => {
        // try {
        //   const response = await fetch(`${__API__}/articles`);
        //   return { data: response.json() };
        // } catch (e) {
        //   return { error: 'error' };
        // }
        const page = getArticlesListPage(getState() as StoreSchema);
        const order = getArticlesListOrder(getState() as StoreSchema);
        const sort = getArticlesListSort(getState() as StoreSchema);
        const category = getArticlesListCategory(getState() as StoreSchema);
        const search = getArticlesListSearch(getState() as StoreSchema) || '';
        try {
          const response = await fetch(`${__API__}/articles?_page=${page}`);
          return { data: await response.json() };
        } catch (e: any) {
          return { error: e.message };
        }
      },
    }),
  }),
});

export const { useGetRecommendedArticlesQuery } = articlesRecommendedListApi;
