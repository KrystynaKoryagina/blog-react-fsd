import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

interface SearchProps {
  searchValue?: string;
  onSearch: (value: string) => void;
  className?: string;
  // TODO
  // onDeleteSearch
}

export const Search = memo(
  ({ searchValue = '', className, onSearch }: SearchProps) => {
    // TODO
    const { t } = useTranslation();

    return (
      <Card className={className}>
        <Input
          value={searchValue}
          placeholder={t('SEARCH')}
          onChange={onSearch}
        />
      </Card>
    );
  },
);
