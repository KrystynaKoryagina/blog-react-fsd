import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import styles from './ArticleCategoryFilter.module.scss';
import { Chip, ChipContent } from '@/shared/ui/deprecated/Chip';
import { ArticleCategory, ArticleCategoryValues } from '@/entities/Article';
import { Flex } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/utils/classNames';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIChip } from '@/shared/ui/UIChip';
import { FlexDirection, FlexWrap } from '@/shared/types/flex';

interface ArticleCategoryFilterProps {
  category: ArticleCategory;
  className?: string;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  onChangeCategory: (value: ChipContent<ArticleCategory>) => void;
}

export const ArticleCategoryFilter = memo(
  ({
    category,
    className,
    direction = 'row',
    wrap = 'wrap',
    onChangeCategory,
  }: ArticleCategoryFilterProps) => {
    const { t } = useTranslation('article');

    const ArticleCategoties = useMemo<ChipContent<ArticleCategory>[]>(
      () =>
        Object.entries(ArticleCategoryValues).map(([key, value]) => ({
          id: key,
          displayName: t(`ARTICLE_CATEGORY.${key}`),
          value,
        })),
      [t],
    );

    return (
      <Flex
        gap="4"
        className={classNames(className)}
        direction={direction}
        wrap={wrap}
      >
        {ArticleCategoties.map((item) => (
          <ToggleFeatureComponent
            key={item.id}
            featureName="isRedesignEnable"
            on={
              <UIChip
                key={item.id}
                content={item}
                isSelected={item.value === category}
                onSelectChip={onChangeCategory}
              />
            }
            off={
              <Chip
                content={item}
                key={item.id}
                isSelected={item.value === category}
                className={styles.categoryChip}
                onSelectChip={onChangeCategory}
              />
            }
          />
        ))}
      </Flex>
    );
  },
);
