import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReducersList } from 'app/providers/store';
import { Button, ButtonType } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { TextType, Text } from 'shared/ui/Text';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUserName';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';

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

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const login = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={styles.LoginForm}>
      {error && <Text variant={TextType.ERROR}>{error}</Text>}
      <Input
        type='text'
        name='username'
        label='Username'
        value={username}
        onChange={onChangeUsername}
        autoFocus
      />
      <Input
        type='password'
        name='password'
        label='Password'
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
    </div>
  );
});

export default LoginForm;
