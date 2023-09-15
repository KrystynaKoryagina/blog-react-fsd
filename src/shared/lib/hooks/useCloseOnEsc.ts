import { useEffect } from 'react';

interface UseCloseOnEscProps {
  onClose: () => void
}

export const useCloseOnEsc = ({ onClose }: UseCloseOnEscProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);
};
