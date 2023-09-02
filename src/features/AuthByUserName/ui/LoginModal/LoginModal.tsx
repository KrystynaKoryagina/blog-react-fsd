import { ReactNode, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Spinner } from 'shared/ui/Spinner';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<Spinner />}>
      <LoginFormLazy />
    </Suspense>
  </Modal>
);
