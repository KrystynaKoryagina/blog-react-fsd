import {
  memo, useCallback, useEffect, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Currency } from 'shared/constants/currency';
import { Country } from 'shared/constants/country';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { useTranslation } from 'react-i18next';
import { Text, TextType } from 'shared/ui/Text';
import { ReducersList } from 'app/providers/store';
import { VStack } from 'shared/ui/Stack';
import { useParams } from 'react-router-dom';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/service/fetchProfleData/fetchProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileEditData } from '../../model/selectors/getProfileEditData/getProfileEditData';
import { getProfileValidateErrors }
  from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { EditProfileCardHeader } from '../EditProfileCardHeader/EditProfileCardHeader';
import { ValidateProfileError } from '../../model/types/editProfile';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  id: string
  classname?: string
}

export const EditProfileCard = memo(({ id, classname }: EditableProfileCardProps) => {
  useDynamicReducerLoader({ reducers });

  const { t } = useTranslation(['translation', 'profile']);
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileEditData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  // TODO storybook
  useEffect(() => {
    dispatch(fetchProfileData(id));
  }, [dispatch, id]);

  const ValidationErrorsJSX = useMemo(() => {
    // TODO add translation
    const validateErrorTranslates = {
      [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
      [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
      [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
      [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
      [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    return validateErrors?.length && validateErrors.map((err) => (
      <Text key={err} variant={TextType.ERROR}>{validateErrorTranslates[err]}</Text>
    ));
  }, [t, validateErrors]);

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstName: value }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastName: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value: string) => {
    // TODO
    const age = Number(value?.replace(/\D/gi, ''));

    dispatch(profileActions.updateProfile({ age }));
  }, [dispatch]);

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <VStack gap='24' className={classname}>
      <EditProfileCardHeader />
      <VStack gap='4'>
        {ValidationErrorsJSX}
        <ProfileCard
          data={data}
          isLoading={isLoading}
          readOnly={readOnly}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </VStack>
  );
});
