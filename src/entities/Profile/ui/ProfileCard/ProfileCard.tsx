import { ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/utils/classNames';
import { Currency, currencyOptions } from '@/shared/constants/currency';
import { Country, countryOptions } from '@/shared/constants/country';
import { HStack, VStack } from '@/shared/ui/Stack';
// import styles from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { ProfileCardDeprecated } from './deprecated/ProfileCardDeprecated';
import { UICard } from '@/shared/ui/UICard';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { UIInput } from '@/shared/ui/UIInput';
import { UISelect } from '@/shared/ui/UISelect';
import { UISkeleton } from '@/shared/ui/UISkeleton';

// TODO
// 1. Создать хук useEditProfileCard и перенести туда все методы
// 2. Перенести запросы в энтити и сделать их через rtkQuery
// 3. UI перенести в EditProfileCard

// TODO Partial<Profile>
interface ProfileCardProps {
  data?: Partial<Profile> | null;
  isLoading?: boolean;
  readOnly?: boolean;
  classname?: string;
  error?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = memo(
  ({
    data,
    classname,
    isLoading,
    error,
    readOnly,
    addonLeft,
    addonRight,
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
        <UICard gap="32" align="center" className={classname}>
          <UISkeleton height={128} width={128} borderRadius="50%" />
          <HStack gap="24" max>
            <VStack gap="16" max>
              <UISkeleton height={42} />
              <UISkeleton height={42} />
              <UISkeleton height={42} />
              <UISkeleton height={42} />
            </VStack>
            <VStack gap="16" max>
              <UISkeleton height={42} />
              <UISkeleton height={42} />
              <UISkeleton height={42} />
              <UISkeleton height={42} />
            </VStack>
          </HStack>
        </UICard>
      );
    }

    // TODO check how we can go into this error
    // if (error) {
    //   return (
    //     <HStack
    //       justify="center"
    //       align="center"
    //       className={classNames(styles.ProfileCard)}
    //     >
    //       <Text variant={TextType.ERROR} align={TextAlign.CENTER}>
    //         {t('ERROR_MESSAGE')}
    //       </Text>
    //     </HStack>
    //   );
    // }

    return (
      <ToggleFeatureComponent
        featureName="isRedesignEnable"
        off={<ProfileCardDeprecated />}
        on={
          <UICard gap="32" align="center" className={classname}>
            <HStack justify="between" align="center">
              {addonLeft}
              <UIAvatar
                size={128}
                alt={t('FORM.USER_AVATAR', { ns: 'profile' })}
                src={data?.avatar}
              />
              {addonRight}
            </HStack>

            <HStack gap="24" max>
              <VStack gap="16" max>
                <UIInput
                  id="firstName"
                  value={data?.firstName}
                  label={t('FORM.FIRSTNAME', { ns: 'profile' })}
                  readOnly={readOnly}
                  onChange={onChangeFirstname}
                />
                <UIInput
                  id="lastName"
                  value={data?.lastName}
                  label={t('FORM.LASTNAME', { ns: 'profile' })}
                  readOnly={readOnly}
                  onChange={onChangeLastname}
                />
                <UIInput
                  id="age"
                  value={data?.age}
                  label={t('FORM.AGE', { ns: 'profile' })}
                  readOnly={readOnly}
                  onChange={onChangeAge}
                />
                <UIInput
                  id="city"
                  value={data?.city}
                  label={t('FORM.CITY', { ns: 'profile' })}
                  readOnly={readOnly}
                  onChange={onChangeCity}
                />
              </VStack>
              <VStack gap="16" max>
                <UIInput
                  id="username"
                  value={data?.username}
                  label={t('FORM.USERNAME', { ns: 'profile' })}
                  readOnly={readOnly}
                  onChange={onChangeUsername}
                />
                <UIInput
                  id="avatar"
                  value={data?.avatar}
                  label={t('FORM.AVATAR', { ns: 'profile' })}
                  readOnly={readOnly}
                  onChange={onChangeAvatar}
                />
                <UISelect<Currency>
                  label={t('FORM.CURRENCY', { ns: 'profile' })}
                  options={currencyOptions}
                  value={data?.currency}
                  onChange={onChangeCurrency}
                  disabled={readOnly}
                />
                <UISelect<Country>
                  label={t('FORM.COUNTRY', { ns: 'profile' })}
                  options={countryOptions}
                  value={data?.country}
                  onChange={onChangeCountry}
                  disabled={readOnly}
                />
              </VStack>
            </HStack>
          </UICard>
        }
      />
    );
  },
);
