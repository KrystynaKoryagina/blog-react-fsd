import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UICode.module.scss';
import { UIButton } from '../UIButton';

interface CodeProps {
  value: string;
  className?: string;
}

export const UICode = memo(({ className, value }: CodeProps) => {
  const ref = useRef<HTMLPreElement>(null);
  const [rows, setRows] = useState<number>(0);

  useEffect(() => {
    if (ref?.current) {
      const height = ref?.current?.offsetHeight;
      const lineHeight = window
        .getComputedStyle(ref?.current, null)
        .getPropertyValue('line-height');

      setRows(Math.floor(height / parseInt(lineHeight)));
    }
  }, [ref]);

  const rowsNumber = useMemo(() => {
    const arr = Array.from(Array(rows).keys());

    return arr.map((item) => (
      <div key={item} className={styles.rowsItem}>
        {item + 1}
      </div>
    ));
  }, [rows]);

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(value);
  }, [value]);

  return (
    <pre className={classNames(styles.CodeWrapper, [className])}>
      <UIButton onClick={onCopy} className={styles.copyBtn} variant="icon">
        <CopyIcon width={32} height={32} />
      </UIButton>
      <div className={styles.rows}>{rowsNumber}</div>
      <code className={styles.code} ref={ref}>
        {value}
      </code>
    </pre>
  );
});
