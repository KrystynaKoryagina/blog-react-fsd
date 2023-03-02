import styles from './Spinner.module.scss';

export const Spinner = () => (
  <div className={styles.Spinner}>
    <div className={styles.ldsEllipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
