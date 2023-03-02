import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from 'shared/ui/Button';
import styles from './Error.module.scss';

export const Error = () => {
  const { t } = useTranslation();

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.Error}>
      <p>{t('ERROR_MESSAGE')}</p>
      <Button variant={ButtonType.PRIMARY} onClick={refreshPage}>{t('BUTTONS.REFRESH')}</Button>
    </div>
  );
};
