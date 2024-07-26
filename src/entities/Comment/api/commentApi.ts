import { rtkApi } from '@/shared/api/rtkQuery';
import { CommentData, SendCommentRequest } from '../model/types/comment';

const commentApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query<CommentData[], string>({
      query: (articleId) => ({
        url: `/comments`,
        params: {
          articleId,
          _expand: 'user',
        },
      }),
    }),
    sendComment: build.mutation<CommentData, SendCommentRequest>({
      query: (body) => ({
        url: `/comments`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useSendCommentMutation } = commentApi;
