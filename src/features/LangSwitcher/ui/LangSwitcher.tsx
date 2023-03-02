import { FC, useState } from 'react';
import i18n from 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import styles from './LangSwitcher.module.scss';

export const enum LangKey {
  EN = 'en',
  RU = 'ru',
}

export interface Lang {
  key: LangKey;
  displayName: string;
}

export const langConfig: Lang[] = [
  { key: LangKey.EN, displayName: 'en' },
  { key: LangKey.RU, displayName: 'ru' },
];

export const LangSwitcher: FC = () => {
  const [langKey, setLangKey] = useState(i18n.language);

  const changeLang = async (key: LangKey) => {
    i18n.changeLanguage(key);
    setLangKey(key);
  };

  return (
    <div className={styles.LangSwitcher}>
      {langConfig.map((item) => (
        <Button
          classname={classNames(styles.LangSwitcherItem, [], {
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
