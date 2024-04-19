import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
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
    <HStack align="center" justify="between">
      <Text as="h1" size={TextSize.LG}>
        {t('PROFILE', { ns: 'profile' })}
      </Text>
      {canEdit &&
        (readOnly ? (
          <Button
            variant={ButtonType.OUTLINE}
            onClick={onEdit}
            data-testid="edit-profile-card-edit-btn"
          >
            {t('BUTTONS.EDIT')}
          </Button>
        ) : (
          <HStack gap="16">
            <Button
              variant={ButtonType.OUTLINE}
              onClick={onCancel}
              data-testid="edit-profile-card-edit-cancel"
            >
              {t('BUTTONS.CANCEL')}
            </Button>
            <Button onClick={onSave} data-testid="edit-profile-card-edit-save">
              {t('BUTTONS.SAVE')}
            </Button>
          </HStack>
        ))}
    </HStack>
  );
});
