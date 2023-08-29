import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utils/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import { langConfig, LangKey } from '../../types/LangSwitcher.types';
import styles from './LangSwitcher.module.scss';

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
    () => langConfig.map((item) => (
      <Button
        className={classNames(styles.lang, [], {
          [styles.active]: i18n.language === item.key,
        })}
        key={item.key}
        variant={ButtonType.GHOST}
        onClick={changeLang(item.key)}
      >
        <span>{item.displayName}</span>
      </Button>
    )),
    [i18n.language, changeLang],
  );

  return (
    <HStack gap='4' className={classNames(styles.LangSwitcher, [className])}>
      {LangItemsJSX}
    </HStack>
  );
});
