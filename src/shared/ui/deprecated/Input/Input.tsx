import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
  label?: string;
  onChange?: (value: string) => void;
}

/**
 * @deprecated Use `UIInput` instead.
 */
export const Input = memo((props: InputProps) => {
  const {
    type = 'text',
    className,
    value,
    id,
    label,
    autoFocus,
    readOnly,
    onChange,
    ...otherProps
  } = props;

  const [caretPosition, setCaretPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isCarretVisible = isFocused && !readOnly;

  useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e?.target?.selectionEnd || 0);
  };

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  return (
    <div className={classNames(styles.InputWrapper, [className])}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
          &gt;
        </label>
      )}
      <div className={styles.inputContent}>
        <input
          ref={inputRef}
          className={classNames(styles.input, [], {
            [styles.readOnly]: readOnly,
          })}
          type={type}
          id={id}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelectHandler}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          autoComplete="off"
          readOnly={readOnly}
          {...otherProps}
        />
        {isCarretVisible && (
          <span
            className={styles.carret}
            style={{
              left: caretPosition * 9,
            }}
          />
        )}
      </div>
    </div>
  );
});
