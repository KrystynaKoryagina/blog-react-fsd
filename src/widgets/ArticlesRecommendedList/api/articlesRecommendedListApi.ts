import { Article } from 'entities/Article'
import { rtkApi } from 'shared/api/rtkQuery'

const articlesRecommendedListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRecommendedArticles: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      }),
    }),
  }),
});

export const { useGetRecommendedArticlesQuery } = articlesRecommendedListApi;
