import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useGetArticleByIdQuery } from '../../api/articleApi';
import { UIText } from '@/shared/ui/UIText';
import { UIImage } from '@/shared/ui/UIImage';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { renderArticleBlock } from '../../lib/utils/renderArticleBlocks';
import { UISkeleton } from '@/shared/ui/UISkeleton';

interface ArticleProps {
  articleId: string;
  className?: string;
}

// const reducers: ReducersList = {
//   article: articleReducer,
// };

export const ArticleDetails = memo(({ className, articleId }: ArticleProps) => {
  // useDynamicReducerLoader({ reducers });

  const { t } = useTranslation(['translation', 'articleDetails']);

  const { data: article, isLoading, error } = useGetArticleByIdQuery(articleId);

  // const isLoading = useSelector(getArticleLoading);
  // const article = useSelector(getArticleData);
  // const error = useSelector(getArticleError);

  // const fetchArticleById = useFetchArticleById();

  // TODO
  // () => {
  //   if (__PROJECT__ !== 'storybook') {
  //     dispatch(fetchArticleById(id));
  //   }
  // }, [dispatch, id]);

  if (isLoading) {
    return (
      <VStack gap="24" className={className}>
        <UISkeleton height={24} />
        <UISkeleton height={24} />
        <UISkeleton height={420} />
        <UISkeleton height={70} />
        <UISkeleton height={70} />
      </VStack>
    );
  }

  if (error) {
    return (
      <UIText variant="error" align="center">
        {t('ERROR_MESSAGE')}
      </UIText>
    );
  }

  return (
    <VStack gap="24" className={className}>
      <UIText as="h1" weight="bold" size="lg">
        {article?.title}
      </UIText>

      <UIText>{article?.subtitle}</UIText>

      <UIImage src={article?.img} height={420} />

      {article?.blocks?.map(renderArticleBlock)}
    </VStack>
  );
});
