import { Suspense } from 'react';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Spinner } from '@/shared/ui/deprecated/Spinner';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<Spinner />}>
      <LoginFormLazy />
    </Suspense>
  </Modal>
);
