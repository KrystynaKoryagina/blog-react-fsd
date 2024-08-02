import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import { getArticleData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getArticleCanEdit } from '../../../../../entities/Article/model/selectors/getArticleCanEdit/getArticleCanEdit';
import {
  getRouteArticleEdit,
  getRouteArticles,
} from '@/shared/constants/routes';
import { ArticleEditButton } from '@/features/ArticleEdit';

/**
 * @deprecated
 */
export const ArticleDetailsPageHeader = memo(() => {
  const { t } = useTranslation();

  // TODO move to feature ???
  const article = useSelector(getArticleData);

  return (
    <HStack justify="between" align="center">
      <AppLink to={getRouteArticles()}>{t('BUTTONS.BACK')}</AppLink>
      {article && <ArticleEditButton articleId={article?.id} />}
    </HStack>
  );
});
