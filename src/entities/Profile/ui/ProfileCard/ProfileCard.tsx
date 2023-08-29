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
import { HStack, VStack } from 'shared/ui/Stack';
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
  const { t } = useTranslation(['translation', 'profile']);

  if (isLoading) {
    return (
      <HStack align='center' className={classNames(styles.ProfileCard)}>
        <Spinner />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify='center' align='center' className={classNames(styles.ProfileCard)}>
        <Text variant={TextType.ERROR} align={TextAlign.CENTER}>
          {t('ERROR_MESSAGE')}
        </Text>
      </HStack>
    );
  }

  return (
    <VStack
      gap='8'
      className={classNames(styles.ProfileCard, [classname], { [styles.editCard]: !readOnly })}
    >
      {data?.avatar
        && <Avatar className={styles.avatar} alt={t('USER_AVATAR')} src={data?.avatar} />}
      <Input
        id='firstName'
        value={data?.firstName}
        label={t('FORM.FIRSTNAME', { ns: 'profile' })}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeFirstname}
      />
      <Input
        id='lastName'
        value={data?.lastName}
        label={t('FORM.LASTNAME', { ns: 'profile' })}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeLastname}
      />
      <Input
        id='age'
        value={data?.age}
        label={t('FORM.AGE', { ns: 'profile' })}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeAge}
      />
      <Input
        id='city'
        value={data?.city}
        label={t('FORM.CITY', { ns: 'profile' })}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeCity}
      />
      <Input
        id='username'
        value={data?.username}
        label={t('FORM.USERNAME', { ns: 'profile' })}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeUsername}
      />
      <Input
        id='avatar'
        value={data?.avatar}
        label={t('FORM.AVATAR', { ns: 'profile' })}
        className={styles.input}
        readOnly={readOnly}
        onChange={onChangeAvatar}
      />
      <Select
        id='currency'
        label={t('FORM.CURRENCY', { ns: 'profile' })}
        options={currencyOptions}
        value={data?.currency}
        onChange={onChangeCurrency}
        disabled={readOnly}
      />
      <Select
        id='country'
        label={t('FORM.COUNTRY', { ns: 'profile' })}
        options={countryOptions}
        value={data?.country}
        onChange={onChangeCountry}
        disabled={readOnly}
      />
    </VStack>
  );
});
