import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// TODO if (__PROJECT__ !== 'jest') find another solution
if (__PROJECT__ !== 'jest') {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      // resources: {
      //   en: {
      //     translation: {
      //       FORM: {
      //         FIRSTNAME: 'Firs name',
      //       },
      //     },
      //     profile: {
      //       FORM: {
      //         FIRSTNAME: 'Firs name',
      //       },
      //     },
      //   },
      // },
      lng: 'en',
      fallbackLng: 'en',
      defaultNS: ['translation'],
      debug: __IS_DEV__,
      initImmediate: false,
      interpolation: {
        escapeValue: false,
      },
      // TODO ???
      // backend: {
      //   loadPath: '/locales/{{lng}}/{{ns}}.json',
      // },
    });
}

export default i18n;
