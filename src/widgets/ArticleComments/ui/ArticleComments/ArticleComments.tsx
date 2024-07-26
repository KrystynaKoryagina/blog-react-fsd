import { memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReducersList } from '@/app/providers/store';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import {
  CommentCard,
  useGetCommentsQuery,
  useSendCommentMutation,
} from '@/entities/Comment';
import { Text } from '@/shared/ui/deprecated/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import {
  articleCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsLoading } from '../../model/selectors/getArticleCommentsLoading/getArticleCommentsLoading';
import { sendArticleComment } from '../../model/services/sendArticleComment/sendArticleComment';
import { useGetArticleByIdQuery } from '@/entities/Article';
import { UICard } from '@/shared/ui/UICard';
import { UIText } from '@/shared/ui/UIText';
import { useGetUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData';

// TODO ????
// const reducers: ReducersList = {
//   articleComments: articleCommentsReducer,
// };

interface ArticleCommentsProps {
  articleId: string;
  className?: string;
}

export const ArticleComments = memo(
  ({ articleId, className }: ArticleCommentsProps) => {
    // useDynamicReducerLoader({ reducers });

    const { t } = useTranslation();

    const { data: comments, isLoading } = useGetCommentsQuery(articleId);
    const [sendComment] = useSendCommentMutation();

    const user = useGetUserAuthData();

    // TODO
    if (!user) {
      return null;
    }
    // const dispatch = useAppDispatch();

    // const comments = useSelector(getArticleComments.selectAll);
    // const isLoading = useSelector(getArticleCommentsLoading);

    // TODO move to hook
    // useEffect(() => {
    //   if (__PROJECT__ !== 'storybook') {
    //     dispatch(fetchCommentsByArticleId(articleId));
    //   }
    // }, [dispatch, id]);

    // useEffect(() => {
    //   dispatch(fetchCommentsByArticleId(articleId));
    // }, [dispatch, articleId]);

    const CommentCardJSX = useMemo(
      () =>
        comments?.map((item) => (
          <CommentCard key={item.id} comment={item} isLoading={isLoading} />
        )),
      [comments, isLoading],
    );

    const onSendComment = useCallback(
      (text: string) => {
        try {
          sendComment({
            text,
            articleId,
            userId: user?.id,
          });
        } catch (e) {
          console.error(e);
        }
      },
      [articleId, user],
    );

    return (
      <VStack className={className} gap="16">
        <UIText weight="bold" size="lg">
          {t('COMMENTS')}
        </UIText>
        {/* TODO обернуть в Suspend ??? ошибка в cторибуке когда обновишь страницу
        или добавить декоратор SuspenseDecorator в сорикейсы
      */}
        <AddCommentForm sentComment={onSendComment} />
        <VStack gap="8">{CommentCardJSX}</VStack>
      </VStack>
    );
  },
);
