import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import styles from './ArticlesRecommendedList.module.scss';
import { useGetRecommendedArticlesQuery } from '../../api/articlesRecommendedListApi';

interface ArticlesRecommendedListProps {
  className?: string;
}

export const ArticlesRecommendedList = memo(
  ({ className }: ArticlesRecommendedListProps) => {
    const { t } = useTranslation('article');

    const {
      data: articles,
      isLoading,
      isError,
    } = useGetRecommendedArticlesQuery(4);

    if (!articles || isError) {
      return null;
    }

    return (
      <VStack className={className} gap="16">
        <Text>{t('RECOMMENDED_ARTICLES')}</Text>
        <ArticlesList
          className={styles.ArticlesRecommendedList}
          articles={articles}
          isLoading={isLoading}
          target="_blank"
        />
      </VStack>
    );
  },
);
