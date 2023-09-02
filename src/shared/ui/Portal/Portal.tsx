import {
  ReactNode, useCallback, useLayoutEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  wrapperId?: string
  children?: ReactNode
}

export const Portal = ({ children, wrapperId = 'app' }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const createWrapperAndAppendToBody = useCallback(() => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);

    return wrapperElement;
  }, [wrapperId]);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody();
    }

    setContainer(element);

    return () => {
      if (systemCreated && element) {
        element.remove();
      }
    };
  }, [wrapperId, createWrapperAndAppendToBody]);

  return container ? createPortal(children, container) : null;
};
