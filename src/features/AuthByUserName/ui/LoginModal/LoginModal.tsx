import { Suspense } from 'react';
import { UIModal } from '@/shared/ui/UIModal';
import { Spinner } from '@/shared/ui/deprecated/Spinner';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <UIModal isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<Spinner />}>
      <LoginFormLazy />
    </Suspense>
  </UIModal>
);
