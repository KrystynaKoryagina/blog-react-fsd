import {
  FC, MouseEvent, useEffect, useRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { classNames } from 'shared/lib/utils/classNames';
import { Portal } from 'shared/ui/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean,
  className?: string,
  onClose: () => void,
}

export const Modal: FC<ModalProps> = ({
  isOpen, onClose, children, className,
}): JSX.Element => {
  const modalRef = useRef(null);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

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
        <div
          ref={modalRef}
          className={classNames(styles.Modal, [className])}
        >
          <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
