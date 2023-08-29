import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleComments } from 'widgets/ArticleComments';
import { ArticlesRecommendedList } from 'widgets/ArticlesRecommendedList';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article');
  const params = useParams<{ id: string }>();
  const { id } = params;

  // TODO надо ли???? как сюда попасть
  if (!id) {
    return (
      <div>
        {t('ARTICLE_NOT_FOUND')}
      </div>
    );
  }

  return (
    <Page>
      <VStack gap='24'>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticlesRecommendedList />
        <ArticleComments articleId={id} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
