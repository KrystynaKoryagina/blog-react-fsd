import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/shared/ui/Card';
import { Text, TextSize } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/constants/routes';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ArticleGridView.module.scss';
import { Article } from '../../model/types/article';
import { UIImage } from '@/shared/ui/UIImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleGridViewProps {
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleGridView = memo(
  ({ article, target }: ArticleGridViewProps) => (
    <Link
      className={styles.ArticleGridView}
      to={getRouteArticleDetails(article.id)}
      target={target}
    >
      <Card className={styles.gridCard}>
        <VStack justify="between" className={styles.gridCardContent}>
          <div className={styles.imageWrapper}>
            <UIImage
              alt={article.title}
              src={article.img}
              className={styles.img}
              fallback={<Skeleton width="100%" height="100%" />}
              errorFallback={<div className={styles.imageError} />}
            />
            <Text className={styles.date} size={TextSize.SM}>
              {article.createdAt}
            </Text>
          </div>

          <VStack gap="4">
            <Text
              className={styles.category}
              size={TextSize.SM}
              title={article.category.join(' ')}
            >
              {article.category.join(' ')}
            </Text>
            <HStack gap="8">
              <Text size={TextSize.SM}>{article.views}</Text>
              <EyeIcon />
            </HStack>
            <Text className={styles.title} title={article.title}>
              {article.title}
            </Text>
          </VStack>
        </VStack>
      </Card>
    </Link>
  ),
);
