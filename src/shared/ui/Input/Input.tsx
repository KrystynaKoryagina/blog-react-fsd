import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
  label?: string;
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    type = 'text',
    className,
    value,
    id,
    label,
    autoFocus,
    onChange,
    ...otherProps
  } = props;

  const [caretPosition, setCaretPosition] = useState(0);
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
    <div className={classNames(styles.Input, [className])}>
      <label className={styles.label} htmlFor={id}>
        <span className={styles.labelText}>
          {label}
          &gt;
        </span>
        <div className={styles.inputContent}>
          <input
            ref={inputRef}
            className={styles.inputField}
            type={type}
            id={id}
            value={value}
            onChange={onChangeHandler}
            onSelect={onSelectHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            autoComplete='off'
            {...otherProps}
          />
          { isFocused && (
            <span
              className={styles.carret}
              style={{
                left: caretPosition * 9,
              }}
            />
          )}
        </div>
      </label>
    </div>
  );
});
