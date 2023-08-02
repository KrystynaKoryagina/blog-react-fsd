import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleComments } from 'widgets/ArticleComments';
import { Page } from 'widgets/Page';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articleDetails');
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
      <ArticleDetails id={id} />
      <ArticleComments articleId={id} />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
