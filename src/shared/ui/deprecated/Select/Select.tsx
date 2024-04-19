import { ChangeEvent, SelectHTMLAttributes, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Select.module.scss';
import { SelectOption } from './types/select';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';

type HTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
>;

interface SelectProps<T extends string> extends HTMLSelectProps {
  options: SelectOption<T>[];
  value?: T;
  className?: string;
  id?: string;
  label?: string;
  onChange?: (value: T) => void;
}

const SelectComponent = <T extends string>({
  id,
  className,
  label,
  options,
  value,
  disabled,
  onChange,
}: SelectProps<T>) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(
    () =>
      options?.map((item) => (
        <option className={styles.option} value={item.value} key={item.value}>
          {item.content}
        </option>
      )),
    [options],
  );

  return (
    <div className={classNames(styles.SelectWrapper, [className])}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
          &gt;
        </label>
      )}

      <div className={styles.selectContainer}>
        <select
          id={id}
          disabled={disabled}
          className={styles.select}
          value={value}
          onChange={onChangeHandler}
        >
          {optionsList}
        </select>
        <ArrowIcon className={styles.selectIcon} width={15} height={15} />
      </div>
    </div>
  );
};

/**
 * @deprecated Use `UISelect` instead.
 */
export const Select = memo(SelectComponent) as typeof SelectComponent;
