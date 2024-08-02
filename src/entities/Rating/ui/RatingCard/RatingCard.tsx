import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { UIModal } from '@/shared/ui/UIModal';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect';
import { UIDrawer } from '@/shared/ui/UIDrawer';
import { UIText } from '@/shared/ui/UIText';
import { UIInput } from '@/shared/ui/UIInput';
import { UICard } from '@/shared/ui/UICard';
import { UIStar } from '@/shared/ui/UIStar';
import { UIButton } from '@/shared/ui/UIButton';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { RatingCard as RatingCardDeprecated } from '../deprecated/RatingCard/RatingCard';

interface RatingCardProps {
  className?: string;
  title: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  rate?: number;
  sendRating: (count: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    title,
    feedbackTitle,
    hasFeedback,
    rate = 0,
    className,
    sendRating,
  } = props;

  const { t } = useTranslation(['translation', 'article']);
  const { isMobile } = useDeviceDetect();

  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [stars, setStars] = useState(rate);

  const onSelectRating = useCallback(
    (count: number) => {
      setStars(count);

      if (hasFeedback) {
        setIsOpen(true);
      } else {
        sendRating?.(count);
      }
    },
    [hasFeedback, sendRating],
  );

  const onCancel = useCallback(() => {
    setIsOpen(false);
    setFeedback('');
    sendRating?.(stars);
  }, [sendRating, stars]);

  const onSend = useCallback(() => {
    setIsOpen(false);
    sendRating?.(stars, feedback);
  }, [feedback, sendRating, stars]);

  const ModalContentJSX = (
    <VStack gap="32">
      <VStack gap="16">
        <UIText>{feedbackTitle}</UIText>
        <UIInput
          value={feedback}
          onChange={setFeedback}
          label={t('LEAVE_COMMENT', { ns: 'article' })}
        />
      </VStack>
      <HStack gap="16" justify="end">
        {!isMobile && (
          <UIButton onClick={onCancel} variant="outline">
            {t('BUTTONS.CANCEL')}
          </UIButton>
        )}
        <UIButton onClick={onSend} variant="outline">
          {t('BUTTONS.SEND')}
        </UIButton>
      </HStack>
    </VStack>
  );

  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      off={<RatingCardDeprecated {...props} />}
      on={
        <>
          <UICard className={className}>
            <VStack gap="24" align="center">
              <UIText>{title}</UIText>
              <UIStar selectedStars={stars} onSelect={onSelectRating} />
            </VStack>
          </UICard>

          {isMobile ? (
            <UIDrawer isOpen={isOpen} onClose={onCancel}>
              {ModalContentJSX}
            </UIDrawer>
          ) : (
            <UIModal isOpen={isOpen} onClose={onCancel}>
              {ModalContentJSX}
            </UIModal>
          )}
        </>
      }
    />
  );
});
