import { memo } from 'react';
import { useTranslation } from 'react-i18next';
// import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';

interface SearchProps {
  searchValue?: string
  onSearch: (value: string) => void
  className?: string
  // TODO
  // onDeleteSearch
}

export const Search = memo(({ searchValue = '', className, onSearch }: SearchProps) => {
  // TODO
  const { t } = useTranslation();

  // console.log('searchValue', searchValue);

  // const onChangeHandler = useDebounce(onSearch, 700);

  return (
    <Card className={className}>
      <Input value={searchValue} placeholder='Search' onChange={onSearch} />
    </Card>
  );
});
