import { memo } from 'react';
import { Link } from 'react-router-dom';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/constants/routes';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ArticleGridView.module.scss';
import { UIImage } from '@/shared/ui/UIImage';
import { Article } from '../../model/types/article';
import { UICard } from '@/shared/ui/UICard';
import { UISkeleton } from '@/shared/ui/UISkeleton';
import { UIText } from '@/shared/ui/UIText';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { ArticleGridViewSkeleton } from './ArticleGridViewSkeleton';

interface ArticleGridViewProps {
  article: Article;
  isLoading: boolean;
}

export const ArticleGridView = memo(
  ({ article, isLoading }: ArticleGridViewProps) => {
    const articleCatagory = article?.category.join(' ');

    return isLoading ? (
      <ArticleGridViewSkeleton />
    ) : (
      <Link to={getRouteArticleDetails(article.id)} target="_self">
        <UICard className={styles.ArticleGridView} padding="0">
          <UIImage
            alt={article.title}
            src={article.img}
            className={styles.img}
            fallback={<UISkeleton width="100%" height="141px" />}
            errorFallback={<div className={styles.imageError} />}
          />

          <VStack className={styles.content} gap="8">
            <UIText title={article.title} className={styles.title}>
              {article.title}
            </UIText>

            <VStack className={styles.info} gap="8">
              {/* TODO remove from card item */}
              <UIText
                className={styles.category}
                size="sm"
                title={articleCatagory}
              >
                {articleCatagory}
              </UIText>

              <HStack gap="8" justify="between" align="center">
                <UIText size="sm">{article.createdAt}</UIText>

                {/* TODO merge to separate component. Use many times???? */}
                <HStack gap="4" align="center">
                  <EyeIcon
                    width={24}
                    height={24}
                    className={styles.viewsIcon}
                  />
                  <UIText size="sm">{article.views}</UIText>
                </HStack>
              </HStack>

              <UIAvatar
                size={32}
                src={article.user?.avatar}
                userName={article?.user?.username}
              />
            </VStack>
          </VStack>
        </UICard>
      </Link>
    );
  },
);
