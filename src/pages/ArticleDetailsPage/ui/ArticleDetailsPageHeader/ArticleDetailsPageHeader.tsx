import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkType } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/routes/routes';
import { Button, ButtonType } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getArticleData } from '@/entities/Article';
import { useNavigate } from 'react-router-dom';
import { HStack } from '@/shared/ui/Stack';
import { getArticleCanEdit } from '../../model/selectors/getArticleCanEdit/getArticleCanEdit';

export const ArticleDetailsPageHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const article = useSelector(getArticleData);
  const canEdit = useSelector(getArticleCanEdit);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(`${RoutePath.ARTICLE_EDIT}/${article.id}/edit`);
    }
  }, [article, navigate]);

  return (
    <HStack justify='between' align='center'>
      <AppLink to={RoutePath.ARTICLES} variant={AppLinkType.SECONDARY}>
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
