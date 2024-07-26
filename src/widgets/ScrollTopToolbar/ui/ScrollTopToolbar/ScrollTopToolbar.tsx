import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import { VStack } from '@/shared/ui/Stack';
import { memo } from 'react';
import styles from './ScrollTopToolbar.module.scss';

// TODO
/* 
Вячеслав Матюк • Пт 02 Июн 2023 • Ответ создан Ср 31 Май 2023
В двух словах пожалуйста:
Как сделать чтобы кнопка тулбара на нужных страницах не висела сразу там, а появлялась только когда проскроллил вниз?
Нравится • Подписаться

Михаил 
я сделал хук который возвращает true или false, если значение скролла превысило начальную высоту окна. По флагу показываю либо скрываю кнопку. Ну как один из вариантов

*/
export const ScrollTopToolbar = memo(() => (
  <VStack justify="center" align="center" className={styles.ScrollTopToolbar}>
    <ScrollToTopButton />
  </VStack>
));
