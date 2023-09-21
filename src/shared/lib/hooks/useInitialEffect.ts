import { useEffect } from 'react';

/* TODO
43 Переменная __PROJECT__. Тесты на модуль профиля 32:25
Андрей Мецлер • Вс 08 Янв 08:54
При написании сторибука для ProfilePage помимо проверки __PROJECT__ !== 'storybook' в useEffect еще нудно добавить проверку для кнопку 'Сохранить', чтобы реальный PUT запрос не улетал.
 2 • Нравится • Подписаться

Владислав
Может лучше написать милдварину для запросов, ведь они нам вообще не нужны в сторибуках)
*/
export function useInitialEffect(callback: () => void, deps: any) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback();
    }
  }, []);
}
