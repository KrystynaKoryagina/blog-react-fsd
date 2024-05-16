import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import styles from './ArticleCategoryFilter.module.scss';
import { Chip, ChipContent } from '@/shared/ui/deprecated/Chip';
import { ArticleCategory } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/utils/classNames';

interface ArticleCategoryFilterProps {
  category: ArticleCategory;
  className?: string;
  onChangeCategory: (value: ChipContent<ArticleCategory>) => void;
}

export const ArticleCategoryFilter = memo(
  ({ category, className, onChangeCategory }: ArticleCategoryFilterProps) => {
    const { t } = useTranslation('article');

    const ArticleCategoties = useMemo<ChipContent<ArticleCategory>[]>(
      () =>
        Object.entries(ArticleCategory).map(([key, value]) => ({
          id: key,
          displayName: t(`ARTICLE_CATEGORY.${key}`),
          value,
        })),
      [t],
    );

    return (
      <HStack gap="4" className={classNames(className)}>
        {ArticleCategoties.map((item) => (
          <Chip
            content={item}
            key={item.id}
            isSelected={item.value === category}
            className={styles.categoryChip}
            onSelectChip={onChangeCategory}
          />
        ))}
      </HStack>
    );
  },
);
