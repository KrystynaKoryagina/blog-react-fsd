import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleComments } from '@/widgets/ArticleComments';
import { ArticlesRecommendedList } from '@/widgets/ArticlesRecommendedList';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRating } from '@/features/ArticleRating';

const ArticleDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const { id } = params;

  if (!id) {
    return null;
  }

  return (
    <Page>
      <VStack gap="24">
        {/* TODO при перезагрузке скачет Back */}
        <ArticleDetailsPageHeader />
        <ArticleDetails articleId={id} />
        <ArticleRating articleId={id} />
        <ArticlesRecommendedList />
        <ArticleComments articleId={id} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
