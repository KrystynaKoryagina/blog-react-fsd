import { FC, useState } from 'react';
import i18n from 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import { langConfig, LangKey } from '../types/LangSwitcher.types';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const [langKey, setLangKey] = useState(i18n.language);

  const changeLang = (key: LangKey) => {
    i18n.changeLanguage(key);
    setLangKey(key);
  };

  return (
    <div className={classNames(styles.LangSwitcher, [className])}>
      {langConfig.map((item) => (
        <Button
          classname={classNames(styles.lang, [], {
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
};
