import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

interface SearchProps {
  searchValue?: string;
  onSearch: (value: string) => void;
  className?: string;
}

export const Search = memo(
  ({ searchValue = '', className, onSearch }: SearchProps) => {
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
