import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utils/classNames';
import { Select } from 'shared/ui/Select';
import { Currency, currencyOptions } from 'shared/constants/currency';
import { Country, countryOptions } from 'shared/constants/country';
import { Text, TextAlign, TextType } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Spinner } from 'shared/ui/Spinner';
import { Avatar } from 'shared/ui/Avatar';
import styles from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  data: Profile | null,
  isLoading?: boolean,
  readOnly?: boolean,
  classname?: string,
  error?: string | null,
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

export const ProfileCard = memo(({
  data,
  classname,
  isLoading,
  error,
  readOnly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard)}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    // TODO
    return (
      <div className={classNames(styles.ProfileCard)}>
        <Text variant={TextType.ERROR} align={TextAlign.CENTER}>Произошла ошибка</Text>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ProfileCard, [classname], { [styles.editCard]: !readOnly })}>
      {data?.avatar
        && <Avatar className={styles.avatar} alt={t('USER_AVATAR')} src={data?.avatar} />}
      <Input
        id='firstName'
        value={data?.firstName}
        label={t('FIRSTNAME')}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeFirstname}
      />
      <Input
        id='lastName'
        value={data?.lastName}
        label={t('LASTNAME')}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeLastname}
      />
      <Input
        id='age'
        value={data?.age}
        label={t('AGE')}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeAge}
      />
      <Input
        id='city'
        value={data?.city}
        label={t('CITY')}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeCity}
      />
      <Input
        id='username'
        value={data?.username}
        label={t('USERNAME')}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeUsername}
      />
      <Input
        id='avatar'
        value={data?.avatar}
        label={t('AVATAR')}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeAvatar}
      />
      <Select
        id='currency'
        label='Укажите валюту' // TODO
        options={currencyOptions}
        value={data?.currency}
        onChange={onChangeCurrency}
        disabled={readOnly}
      />
      <Select
        id='country'
        label='Укажите страну' // TODO
        options={countryOptions}
        value={data?.country}
        onChange={onChangeCountry}
        disabled={readOnly}
      />
    </div>
  );
});
