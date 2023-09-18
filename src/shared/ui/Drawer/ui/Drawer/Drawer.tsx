import {
  ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '@/shared/ui/Overlay';
import { useCloseOnEsc } from '@/shared/lib/hooks/useCloseOnEsc';
import { AnimationProvider, useAnimation } from '@/shared/lib/contexts/animation';
import styles from './Drawer.module.scss';

const height = window.innerHeight - 300;

interface DrawerProps {
  isOpen: boolean
  className?: string
  children?: ReactNode
  onClose: () => void
}

const DrawerContent = ({
  isOpen, onClose, children, className,
}: DrawerProps) => {
  const { Gesture, Spring } = useAnimation();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const open = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      open();
    }
  }, [api, isOpen, open]);

  const close = useCallback((velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  }, [Spring.config.stiff, api, onClose]);

   {/* TODO fix  () => close( */}
  useCloseOnEsc({ onClose: () => close() });

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close(vy);
        } else {
          open();
        }
      } else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    isOpen ? (
      <Portal>
        <div className={classNames(styles.Drawer, [className], {
          [styles.open]: isOpen,
          [styles.close]: !isOpen,
        })}
        >
          {/* TODO fix  () => close( */}
          <Overlay onClick={() => close()} /> 
          <Spring.a.div
            className={styles.content}
            style={{ display, bottom: `calc(-100vh + ${height}px)`, y }}
            {...bind()}
          >
            {children}
          </Spring.a.div>
        </div>
      </Portal>
    ) : null
  );
};

const DrawerAsync = (props: DrawerProps) => {
  // NOTE Downloading Libraries Gesture, Spring
  const { isLoaded } = useAnimation();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);
