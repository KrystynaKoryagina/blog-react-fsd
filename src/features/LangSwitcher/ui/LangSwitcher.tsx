import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utils/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import { langConfig, LangKey } from '../types/LangSwitcher.types';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();
  const [langKey, setLangKey] = useState('');

  useEffect(() => {
    setLangKey(i18n.language);
  }, [i18n]);

  const changeLang = async (key: LangKey) => {
    i18n.changeLanguage(key);
    setLangKey(key);
  };

  return (
    <div className={classNames(styles.LangSwitcher, [className])}>
      {langConfig.map((item) => (
        <Button
          className={classNames(styles.lang, [], {
            [styles.active]: langKey === item.key,
          })}
          key={item.key}
          variant={ButtonType.GHOST}
          onClick={() => changeLang(item.key)}
        >
          <span>{item.displayName}</span>
        </Button>
      ))}
    </div>
  );
});
