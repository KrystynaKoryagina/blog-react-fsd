import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/contexts/theme';
import { Button, ButtonType } from '@/shared/ui/Button';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { useSaveJsonSettings } from '@/entities/User';

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
    <Button
      className={className}
      variant={ButtonType.GHOST}
      onClick={onToggleTheme}
    >
      <ThemeIcon width={24} height={24} />
    </Button>
  );
});
