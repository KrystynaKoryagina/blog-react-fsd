import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/Stack';
import { LangKey } from '../../types/LangSwitcher';
import { langConfig } from '../../const/LangSwitcher';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIButton } from '@/shared/ui/UIButton';

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
        <ToggleFeatureComponent
          key={item.key}
          featureName="isRedesignEnable"
          on={
            <UIButton
              key={item.key}
              variant="ghost"
              isActive={i18n.language === item.key}
              onClick={changeLang(item.key)}
            >
              <span>{item.displayName}</span>
            </UIButton>
          }
          off={
            <Button
              key={item.key}
              variant={ButtonType.GHOST}
              isActive={i18n.language === item.key}
              onClick={changeLang(item.key)}
            >
              <span>{item.displayName}</span>
            </Button>
          }
        />
      )),
    [i18n.language, changeLang],
  );

  return (
    <HStack gap="4" className={className}>
      {LangItemsJSX}
    </HStack>
  );
});
