import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UIInput.module.scss';
import { HStack } from '../Stack';
import { UIText } from '../UIText';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface UIInputProps extends HTMLInputProps {
  label?: string;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  onChange?: (value: string) => void;
}

export const UIInput = memo((props: UIInputProps) => {
  const {
    type = 'text',
    className,
    value,
    id,
    label,
    autoFocus,
    readOnly,
    addonLeft,
    addonRight,
    onChange,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  return (
    <HStack gap="16" align="center" fullWidth>
      {label && (
        <label className={styles.label} htmlFor={id}>
          <UIText as="span" size="sm">
            {label}
          </UIText>
        </label>
      )}

      <HStack
        align="center"
        className={classNames(styles.InputWrapper, [className], {
          [styles.focused]: isFocused,
          [styles.readOnly]: readOnly,
          [styles.withAddon]: !!addonLeft || !!addonRight,
        })}
        fullWidth
      >
        {addonLeft && <div className={styles.addon}>{addonLeft}</div>}
        <input
          className={styles.input}
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          readOnly={readOnly}
          autoComplete="off"
          {...otherProps}
        />
        {addonRight && <div className={styles.addon}>{addonRight}</div>}
      </HStack>
    </HStack>
  );
});
