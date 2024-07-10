import {
  ChangeEvent,
  SelectHTMLAttributes,
  memo,
  useMemo,
  Fragment,
} from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UISelect.module.scss';
import { SelectOption } from './types/select';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Listbox } from '@headlessui/react';
import { UIButton } from '../UIButton';
import CheckIcon from '@/shared/assets/icons/check.svg';
import { HStack } from '../Stack';

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
  const optionsList = useMemo(
    () =>
      options?.map((item) => (
        <Listbox.Option key={item.value} value={item.value} as={Fragment}>
          {({ selected }) => (
            <li className={styles.item}>
              <HStack gap="16">
                <div className={styles.itemContent}>{item.content}</div>
                <div className={styles.checkIcon}>
                  {selected && <CheckIcon />}
                </div>
              </HStack>
            </li>
          )}
        </Listbox.Option>
      )),
    [options],
  );

  const selectedItem = useMemo(() => {
    return options?.find((item) => item.value === value);
  }, [options, value]);

  return (
    <Listbox
      className={classNames('dropdown', [className])}
      value={value}
      onChange={onChange}
      as="div"
    >
      {({ open }) => (
        <>
          <Listbox.Button
            as={UIButton}
            className={styles.trigger}
            addonRight={
              <ArrowIcon
                className={classNames(styles.icon, [], {
                  [styles.iconOpen]: open,
                })}
                width={32}
                height={32}
              />
            }
          >
            {selectedItem?.content}
          </Listbox.Button>
          <Listbox.Options
            className={classNames('dropdownMenuList', [className])}
          >
            {optionsList}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};

export const UISelect = memo(SelectComponent) as typeof SelectComponent;
