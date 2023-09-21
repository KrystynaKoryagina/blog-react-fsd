import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLink, AppLinkType } from '@/shared/ui/AppLink';
import { Button, ButtonType } from '@/shared/ui/Button';
import { getArticleData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getArticleCanEdit } from '../../model/selectors/getArticleCanEdit/getArticleCanEdit';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/constants/routes';

export const ArticleDetailsPageHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const article = useSelector(getArticleData);
  const canEdit = useSelector(getArticleCanEdit);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  return (
    <HStack justify='between' align='center'>
      <AppLink to={getRouteArticles()} variant={AppLinkType.SECONDARY}>
        {t('BUTTONS.BACK')}
      </AppLink>
      {canEdit && (
        <Button
          variant={ButtonType.OUTLINE}
          onClick={onEditArticle}
        >
          {t('BUTTONS.EDIT')}
        </Button>
      )}
    </HStack>
  );
};
