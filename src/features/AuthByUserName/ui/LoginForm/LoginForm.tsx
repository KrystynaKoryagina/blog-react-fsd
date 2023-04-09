import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonType } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { TextType, Text } from 'shared/ui/Text';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';
import { loginByUsername } from '../../model/api/loginByUsername/loginByUserName';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { LoginStore } from '../../model/types/login';

const reducers: ReducersList<LoginStore> = {
  login: loginReducer,
};

const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginLoading);

  useDynamicModuleLoader({ reducers });

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
      {error && <Text variant={TextType.ERROR} value={error} />}
      <Input
        type='text'
        name='username'
        labelText='Username'
        value={username}
        onChange={onChangeUsername}
        autoFocus
      />
      <Input
        type='password'
        name='password'
        labelText='Password'
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
