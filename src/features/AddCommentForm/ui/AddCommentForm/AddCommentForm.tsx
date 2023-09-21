import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/utils/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonType } from '@/shared/ui/Button';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from '@/app/providers/store';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/AddCommentFormSlice';
import styles from './AddCommentForm.module.scss';
import { getAddCommentFormText }
  from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';

export interface AddCommentFormProps {
  sentComment: (text: string) => void;
  className?: string;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ sentComment, className }: AddCommentFormProps) => {
  useDynamicReducerLoader({ reducers });

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comment = useSelector(getAddCommentFormText);

  const onCommentChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setComment(value));
  }, [dispatch]);

  const onCommentSend = useCallback(() => {
    if (comment) {
      sentComment(comment);
      onCommentChange('');
    }
  }, [comment, onCommentChange, sentComment]);

  return (
    <HStack
      align='center'
      justify='between'
      className={classNames(styles.AddCommentForm, [className])}
    >
      {/* TODO reset value after send comment */}
      <Input
        className={styles.input}
        label={t('ENTER_COMMENT')}
        onChange={onCommentChange}
      />
      <Button
        variant={ButtonType.OUTLINE}
        onClick={onCommentSend}
        disabled={!comment}
      >
        {t('BUTTONS.SEND')}
      </Button>
    </HStack>
  );
});

export default AddCommentForm;
