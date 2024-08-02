import { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group'; // TODO remove this lib and hide another solution or use react-spring
import { classNames } from '@/shared/lib/utils/classNames';
import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '@/shared/ui/Overlay';
import { useCloseOnEsc } from '@/shared/lib/hooks/useCloseOnEsc';
import styles from './UIModal.module.scss';
import { toggleFeature } from '@/shared/lib/utils/toggleFeature';
import { useUnleashClient } from '@unleash/proxy-client-react';

interface ModalProps {
  isOpen: boolean;
  className?: string;
  children?: ReactNode;
  onClose: () => void;
}

export const UIModal = ({
  isOpen,
  onClose,
  children,
  className,
}: ModalProps): JSX.Element => {
  useCloseOnEsc({ onClose });

  const modalRef = useRef(null);
  const client = useUnleashClient();

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        timeout={300}
        nodeRef={modalRef}
        unmountOnExit
        classNames={{
          enter: styles.ModalEnter,
          enterDone: styles.modalEnterDone,
          exitActive: styles.modalExitActive,
        }}
      >
        <div ref={modalRef} className={classNames(styles.Modal, [className])}>
          <Overlay onClick={onClose} />
          <div
            className={classNames(styles.content, [
              toggleFeature({
                featureName: 'isRedesignEnable',
                on: () => styles.new,
                off: () => styles.old,
                client,
              }),
            ])}
          >
            {children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
