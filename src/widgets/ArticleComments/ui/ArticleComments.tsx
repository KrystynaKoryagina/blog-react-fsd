import {
  memo, useCallback, useEffect, useMemo,
} from 'react';
import { ReducersList } from 'app/providers/store';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { CommentCard } from 'entities/Comment';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { AddCommentForm } from 'features/AddCommentForm';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { fetchCommentsByArticleId }
  from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsLoading }
  from '../model/selectors/getArticleCommentsLoading/getArticleCommentsLoading';
import { sendArticleComment } from '../model/services/sendArticleComment/sendArticleComment';

const reducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

interface ArticleCommentsProps {
  articleId: string
  className?: string
}

export const ArticleComments = memo(({ articleId, className }: ArticleCommentsProps) => {
  useDynamicReducerLoader({ reducers });

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsLoading);

  // TODO move to hook
  // useEffect(() => {
  //   if (__PROJECT__ !== 'storybook') {
  //     dispatch(fetchCommentsByArticleId(articleId));
  //   }
  // }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  }, [dispatch, articleId]);

  const CommentCardJSX = useMemo(
    () => comments?.map(
      (item) => <CommentCard key={item.id} comment={item} isLoading={isLoading} />,
    ),
    [comments, isLoading],
  );

  const onSendComment = useCallback((value: string) => {
    dispatch(sendArticleComment(value));
  }, [dispatch]);

  return (
    <VStack className={className} gap='16'>
      <Text>{t('COMMENTS')}</Text>
      <AddCommentForm sentComment={onSendComment} />
      <VStack gap='8'>
        {CommentCardJSX}
      </VStack>
    </VStack>
  );
});
