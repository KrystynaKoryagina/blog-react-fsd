import { useSelector } from 'react-redux';
import { Button, ButtonType } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getProfileCanEdit } from '../../model/selectors/getProfileCanEdit/getProfileCanEdit';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

export const EditProfileCardHeader = memo(() => {
  const { t } = useTranslation(['translation', 'profile']);

  const dispatch = useAppDispatch();

  const canEdit = useSelector(getProfileCanEdit);
  const readOnly = useSelector(getProfileReadOnly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack align='center' justify='between'>
      <Text as='h1' size={TextSize.LG}>{t('PROFILE', { ns: 'profile' })}</Text>
      {canEdit && (
        readOnly
          ? (
            <Button
              variant={ButtonType.OUTLINE}
              onClick={onEdit}
            >
              {t('BUTTONS.EDIT')}
            </Button>
          )
          : (
            <HStack gap='16'>
              <Button
                variant={ButtonType.OUTLINE}
                onClick={onCancel}
              >
                {t('BUTTONS.CANCEL')}
              </Button>
              <Button
                variant={ButtonType.PRIMARY_INVERTED}
                onClick={onSave}
              >
                {t('BUTTONS.SAVE')}
              </Button>
            </HStack>
          )
      )}
    </HStack>
  );
});
