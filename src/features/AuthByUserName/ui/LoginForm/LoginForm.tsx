import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonType } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { TextType, Text } from 'shared/ui/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import styles from './LoginForm.module.scss';
import { loginByUsername } from '../../model/api/loginByUsername/loginByUserName';

const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

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
        name='email'
        labelText='Email'
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
