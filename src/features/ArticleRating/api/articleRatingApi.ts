import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkQuery';
import {
  GetArticleRatingRequest,
  RateArticleRequest,
} from '../model/types/ArticleRating';

const articlesRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingRequest>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleRequest>({
      query: (body) => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery } = articlesRatingApi;
export const { useRateArticleMutation } = articlesRatingApi;
