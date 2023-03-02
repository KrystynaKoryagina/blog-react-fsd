import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/* TODO
i18n помимо текущего языка, еще и подтягивает язык с параметра fallbackLng: "ru".
То есть, если стоит язык "ru", все хорошо, подгружаются только чанки из "locales/ru".
Если же поставить язык "en" и обновить страницу, сначала подтянутся все чанки из "locales/en",
а потом из все чанки "locales/{язык указанный в fallbackLng (по умолчанию dev)}".
У Тимура не видно такого поведения в ролике (таймлайн 12:25), судя по всему,
потому что в исходном коде у него стоит fallbackLng: "en" и показывает он подгрузку чанков с установленным языком "en".
Я чтобы не подгружать лишние чанки, поставил параметр fallbackLng: false. Исправьте меня, если ход мыслей неправильный.
Check { lng: "ru", fallbackLng: "ru"}

i18next-locize-backend
https://locize.com/i18next.html
*/

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: __IS_DEV__,
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
