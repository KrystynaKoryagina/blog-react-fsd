import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { LangKey } from '../../types/LangSwitcher.types';
import { langConfig } from '../../const/LangSwitcher';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const changeLang = useCallback(
    (key: LangKey) => async () => {
      i18n.changeLanguage(key);
    },
    [i18n],
  );

  const LangItemsJSX = useMemo(
    () =>
      langConfig.map((item) => (
        <Button
          key={item.key}
          variant={ButtonType.GHOST}
          isActive={i18n.language === item.key}
          onClick={changeLang(item.key)}
        >
          <span>{item.displayName}</span>
        </Button>
      )),
    [i18n.language, changeLang],
  );

  return (
    <HStack gap="4" className={className}>
      {LangItemsJSX}
    </HStack>
  );
});
