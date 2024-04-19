import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/contexts/theme';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import ThemeIconDeprecated from '@/shared/assets/icons/deprecated/theme.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { useSaveJsonSettings } from '@/entities/User';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIButton } from '@/shared/ui/UIButton';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const saveTheme = useSaveJsonSettings();

  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      saveTheme({ theme: newTheme });
    });
  }, [saveTheme, toggleTheme]);

  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      on={
        <UIButton className={className} variant="ghost" onClick={onToggleTheme}>
          <ThemeIcon width={32} height={32} />
        </UIButton>
      }
      off={
        <Button
          className={className}
          variant={ButtonType.GHOST}
          onClick={onToggleTheme}
        >
          <ThemeIconDeprecated width={24} height={24} />
        </Button>
      }
    />
  );
});
