import { SelectHTMLAttributes, memo, useMemo, Fragment } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UISelect.module.scss';
import { SelectOption } from './types/select';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import {
  Field,
  Label,
  Listbox,
  ListboxOption,
  ListboxButton,
  ListboxOptions,
} from '@headlessui/react';
import { UIButton } from '../UIButton';
import CheckIcon from '@/shared/assets/icons/check.svg';
import { HStack } from '@/shared/ui/Stack';
import { UIText } from '@/shared/ui/UIText';

type HTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
>;

interface SelectProps<T extends string> extends HTMLSelectProps {
  options: SelectOption<T>[];
  value?: T;
  className?: string;
  label?: string;
  onChange?: (value: T) => void;
}

const SelectComponent = <T extends string>({
  className,
  label,
  options,
  value,
  disabled,
  onChange,
}: SelectProps<T>) => {
  const OptionsListJSX = useMemo(
    () =>
      options?.map((item) => (
        <ListboxOption key={item.value} value={item.value} as={Fragment}>
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
        </ListboxOption>
      )),
    [options],
  );

  const ListBoxJSX = useMemo(
    () => (
      <Listbox
        className={classNames(`${styles.Select} dropdown`, [className], {
          [styles.disabled]: disabled,
        })}
        value={value}
        onChange={onChange}
        as="div"
        disabled={disabled}
      >
        {({ open }) => (
          <HStack>
            <ListboxButton
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
            </ListboxButton>
            <ListboxOptions className={`${styles.options} dropdownMenuList`}>
              {OptionsListJSX}
            </ListboxOptions>
          </HStack>
        )}
      </Listbox>
    ),
    [disabled], // TODO eslint to show зависимости???
  );

  const selectedItem = useMemo(() => {
    return options?.find((item) => item.value === value);
  }, [options, value]);

  if (label) {
    return (
      <Field disabled={disabled}>
        <HStack gap="16" align="center">
          {label && (
            <Label>
              <UIText as="span" size="sm">
                {label}
              </UIText>
            </Label>
          )}
          {ListBoxJSX}
        </HStack>
      </Field>
    );
  }

  return ListBoxJSX;
};

export const UISelect = memo(SelectComponent) as typeof SelectComponent;
