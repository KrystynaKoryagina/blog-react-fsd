import { UIButton } from '@/shared/ui/UIButton';
import { memo } from 'react';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

export const ScrollToTopButton = memo(() => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <UIButton variant="icon" onClick={scrollToTop}>
      <CircleIcon width={32} height={32} />
    </UIButton>
  );
});
