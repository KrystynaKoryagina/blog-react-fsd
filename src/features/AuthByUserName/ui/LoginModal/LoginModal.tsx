import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Spinner } from 'shared/ui/Spinner';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Suspense fallback={<Spinner />}>
      <LoginFormLazy />
    </Suspense>
  </Modal>
);
