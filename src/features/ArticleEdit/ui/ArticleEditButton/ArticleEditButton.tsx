import { getArticleCanEdit } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/constants/routes';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import { UIButton } from '@/shared/ui/UIButton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

interface ArticleEditButtonProps {
  articleId: string;
  className?: string;
}

export const ArticleEditButton = memo(
  ({ articleId, className }: ArticleEditButtonProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // TODO update to use rtkQuery
    const canEdit = useSelector(getArticleCanEdit);

    const onEditArticle = useCallback(() => {
      navigate(getRouteArticleEdit(articleId));
    }, [articleId, navigate]);

    return (
      <ToggleFeatureComponent
        featureName="isRedesignEnable"
        off={
          <Button
            variant={ButtonType.OUTLINE}
            onClick={onEditArticle}
            disabled={!canEdit}
            className={className}
          >
            {t('BUTTONS.EDIT')}
          </Button>
        }
        on={
          <UIButton
            as={Link}
            variant="outline"
            className={className}
            // disabled={!canEdit} // TODO
            to={getRouteArticleEdit(articleId)}
          >
            {t('BUTTONS.EDIT')}
          </UIButton>
        }
      />
    );
  },
);
