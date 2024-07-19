import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/deprecated/eye.svg';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { getRouteArticleDetails } from '@/shared/constants/routes';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ArticleListView.module.scss';
import { Article, ArticleTextBlock } from '../../../model/types/article';
import { ArticleText } from '../ArticleText/ArticleText';
import { UIImage } from '@/shared/ui/UIImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListViewProps {
  article: Article;
}

/**
 * @deprecated
 */
export const ArticleListView = memo(({ article }: ArticleListViewProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const textBlock = useMemo(
    () => article?.blocks?.find((block) => block.type === 'TEXT'),
    [article.blocks],
  ) as ArticleTextBlock;

  const navigateToArticleDetails = useCallback(() => {
    navigate(getRouteArticleDetails(article.id));
  }, [article.id, navigate]);

  return (
    <Card>
      <VStack gap="16">
        <HStack justify="between" align="center">
          <HStack gap="4" align="center">
            <Avatar size={30} src={article.user.avatar} />
            <Text>{article.user.username}</Text>
          </HStack>
          <Text>{article.createdAt}</Text>
        </HStack>

        <VStack gap="16">
          <VStack gap="4">
            <Text>{article?.title}</Text>
            <Text size={TextSize.XS} title={article.category.join(' ')}>
              {article.category.join(' ')}
            </Text>
          </VStack>

          <UIImage
            src={article.img}
            className={styles.img}
            alt={article.title}
            fallback={<Skeleton width="100%" height={250} />}
            errorFallback={<div className={styles.imageError} />}
          />
          <ArticleText className={styles.textBlock} block={textBlock} />
        </VStack>

        <HStack align="center" justify="between">
          <Button onClick={navigateToArticleDetails}>
            {t('BUTTONS.READ')}
          </Button>

          <HStack gap="8" align="center">
            <Text size={TextSize.SM}>{article.views}</Text>
            <EyeIcon />
          </HStack>
        </HStack>
      </VStack>
    </Card>
  );
});
