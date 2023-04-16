import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/utils/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
// import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  classname?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ classname }) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, [classname])}>
      <div className={styles.header}>
        <Text value={t('PROFILE')} />
        <Button
          className={styles.editBtn}
          variant={ButtonType.OUTLINE}
        >
          {t('EDIT')}
        </Button>
      </div>
      <div className={styles.content}>
        <Input
          value={data?.firstName}
          label={t('FIRSTNAME')}
          className={styles.input}
        />
        <Input
          value={data?.lastName}
          label={t('LASTNAME')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
