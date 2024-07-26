import { rtkApi } from '@/shared/api/rtkQuery';
import { Article } from '../model/types/article';

const articleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleById: build.query<Article, string>({
      query: (articleId) => ({
        url: `/articles/${articleId}`,
        params: {
          _expand: 'user',
        },
      }),
    }),
    getRecommendedArticles: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user',
        },
      }),
    }),
  }),
});

export const { useGetArticleByIdQuery, useGetRecommendedArticlesQuery } =
  articleApi;
