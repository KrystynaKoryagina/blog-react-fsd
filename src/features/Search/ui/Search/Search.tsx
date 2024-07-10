import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIInput } from '@/shared/ui/UIInput';
import SearchIcon from '@/shared/assets/icons/search.svg';
import CloseIcon from '@/shared/assets/icons/close.svg';
import styles from './Search.module.scss';

interface SearchProps {
  searchValue?: string;
  className?: string;
  onSearch: (value: string) => void;
}

export const Search = memo(
  ({ searchValue = '', className, onSearch }: SearchProps) => {
    const { t } = useTranslation();

    const cleanSearch = useCallback(() => {
      onSearch('');
    }, [onSearch]);

    return (
      <ToggleFeatureComponent
        featureName="isRedesignEnable"
        off={
          <Card className={className}>
            <Input
              value={searchValue}
              placeholder={t('LABELS.SEARCH')}
              onChange={onSearch}
            />
          </Card>
        }
        on={
          <UIInput
            className={className}
            value={searchValue}
            placeholder={t('LABELS.SEARCH')}
            onChange={onSearch}
            addonLeft={<SearchIcon width={32} height={32} />}
            addonRight={
              searchValue && (
                <CloseIcon
                  className={styles.cleanIcon}
                  width={16}
                  height={16}
                  onClick={cleanSearch}
                />
              )
            }
          />
        }
      />
    );
  },
);
