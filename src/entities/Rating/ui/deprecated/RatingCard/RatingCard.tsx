import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { HStack, VStack } from '@/shared/ui/Stack';
import { UIModal } from '@/shared/ui/UIModal';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { UIDrawer } from '@/shared/ui/UIDrawer';

interface RatingCardProps {
  className?: string;
  title: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  rate?: number;
  sendRating: (count: number, feedback?: string) => void;
}

/**
 * @deprecated
 */
export const RatingCard = memo(
  ({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    rate = 0,
    sendRating,
  }: RatingCardProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [stars, setStars] = useState(rate);
    const { isMobile } = useDeviceDetect();

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
      <VStack gap="16">
        <Text>{feedbackTitle}</Text>
        <Input value={feedback} onChange={setFeedback} label={t('Ваш отзыв')} />
      </VStack>
    );

    return (
      <>
        <Card className={className}>
          <VStack gap="24" align="center">
            <Text>{title}</Text>
            <StarRating selectedStars={stars} onSelect={onSelectRating} />
          </VStack>
        </Card>
        {isMobile ? (
          <UIDrawer isOpen={isOpen} onClose={onCancel}>
            <VStack gap="32">
              {ModalContentJSX}
              <Button onClick={onSend}>{t('Отправить')}</Button>
            </VStack>
          </UIDrawer>
        ) : (
          <UIModal isOpen={isOpen} onClose={onCancel}>
            <VStack gap="32">
              {ModalContentJSX}
              <HStack gap="16" justify="end">
                <Button onClick={onCancel} variant={ButtonType.OUTLINE}>
                  {t('Закрыть')}
                </Button>
                <Button onClick={onSend}>{t('Отправить')}</Button>
              </HStack>
            </VStack>
          </UIModal>
        )}
      </>
    );
  },
);
