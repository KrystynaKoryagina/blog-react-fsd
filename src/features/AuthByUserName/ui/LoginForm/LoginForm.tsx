import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReducersList } from '@/app/providers/store';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { TextType, Text } from '@/shared/ui/deprecated/Text';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUserName';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UICard } from '@/shared/ui/UICard';
import { UIText } from '@/shared/ui/UIText';
import { UIInput } from '@/shared/ui/UIInput';
import { UIButton } from '@/shared/ui/UIButton';

const reducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginLoading);

  useDynamicReducerLoader({ reducers });

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const login = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      off={
        <VStack gap="16" className={styles.LoginForm}>
          {error && <Text variant={TextType.ERROR}>{error}</Text>}
          <Input
            type="text"
            name="username"
            label="Username"
            value={username}
            onChange={onChangeUsername}
            autoFocus
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={onChangePassword}
          />
          <Button
            variant={ButtonType.OUTLINE}
            disabled={isLoading}
            onClick={login}
          >
            {t('BUTTONS.LOGIN')}
          </Button>
        </VStack>
      }
      on={
        <VStack gap="24" className={styles.LoginForm}>
          {error && <UIText variant="error">{error}</UIText>}
          <UIInput
            type="text"
            name="username"
            label="Username"
            value={username}
            onChange={onChangeUsername}
            // autoFocus
          />
          <UIInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={onChangePassword}
          />
          <UIButton variant="outline" disabled={isLoading} onClick={login}>
            {t('BUTTONS.LOGIN')}
          </UIButton>
        </VStack>
      }
    />
  );
});

export default LoginForm;
