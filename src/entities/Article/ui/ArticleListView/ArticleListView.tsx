import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/constants/routes';
import { HStack } from '@/shared/ui/Stack';
import styles from './ArticleListView.module.scss';
import { UIImage } from '@/shared/ui/UIImage';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { UICard } from '@/shared/ui/UICard';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { UIText } from '@/shared/ui/UIText';
import { UISkeleton } from '@/shared/ui/UISkeleton';
import { UIButton } from '@/shared/ui/UIButton';
import { ArticleListViewSkeleton } from './ArticleListViewSkeleton';

interface ArticleListViewProps {
  article: Article;
  isLoading: boolean;
}

export const ArticleListView = memo(
  ({ article, isLoading }: ArticleListViewProps) => {
    const { t } = useTranslation();

    const articleCatagory = article?.category.join(' '); // TODO обернуть в useMemo или вынести в пропсы. Используется в двух местах в ArticleGridView

    const textBlock = useMemo(
      () => article?.blocks?.find((block) => block.type === 'TEXT'),
      [article],
    ) as ArticleTextBlock;

    return isLoading ? (
      <ArticleListViewSkeleton />
    ) : (
      <UICard gap="8" className={styles.ArticleListView}>
        <HStack gap="8" align="center">
          <UIAvatar
            size={32}
            src={article.user.avatar}
            userName={article.user.username}
            textSize="sm"
            textWeight="bold"
          />
          <UIText size="sm">{article.createdAt}</UIText>
        </HStack>

        <UIText weight="bold" size="lg" className={styles.title}>
          {article?.title}
        </UIText>
        <UIText>{article?.subtitle}</UIText>
        <UIText size="sm" title={articleCatagory}>
          {articleCatagory}
        </UIText>

        <UIImage
          src={article.img}
          className={styles.img}
          alt={article.title}
          fallback={<UISkeleton width="100%" height={300} />}
          errorFallback={<div className={styles.imageError} />}
        />

        <UIText size="sm" className={styles.textBlock}>
          {textBlock.paragraphs}
        </UIText>

        <HStack align="center" justify="between">
          <UIButton
            as={Link}
            variant="outline"
            to={getRouteArticleDetails(article.id)}
          >
            {t('BUTTONS.READ')}
          </UIButton>

          <HStack gap="8" align="center">
            <EyeIcon className={styles.viewsIcon} width={32} height={32} />
            <UIText size="sm">{article.views}</UIText>
          </HStack>
        </HStack>
      </UICard>
    );
  },
);
