import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Story } from '@storybook/react';
import i18n from 'shared/config/i18n/i18n.jest';

export const i18nDecorator = (StoryComponent: Story) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div>Loading</div>}>
      <StoryComponent />
    </Suspense>
  </I18nextProvider>
);

// TODO
/*
1. Для удобство сделал Аддон в Сторибук, чтобы можно было переключать темы на любой форме.
Для этого файл config/storybook/preview.js имеет следующий вид:

import { addDecorator } from '@storybook/react';

import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

export const parameters = {
actions: { argTypesRegex: '^on[A-Z].*' },
controls: {
matchers: {
color: /(background|color)$/i,
date: /Date$/,
},
},
};

export const globalTypes = {
locale: {
name: 'Locale',
description: 'Internationalization locale',
toolbar: {
icon: 'globe',
items: [
{ value: 'ru', title: 'Русский' },
{ value: 'en', title: 'English' },
],
},
},
};

addDecorator(TranslationDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);

Файл shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx:

import i18n from 'shared/config/i18n/i18nForTests';

import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { Suspense, useEffect } from 'react';

export const TranslationDecorator = (StoryComponent: Story, context: any) => {
const { locale } = context.globals;

useEffect(() => {
i18n.changeLanguage(locale);
}, [locale]);

return (
<Suspense fallback="">
<I18nextProvider i18n={i18n}>
<StoryComponent />
</I18nextProvider>
</Suspense>
);
};

2. Для того чтобы переводы попадали в тестовый конфиг заполнял поле resources, т.к. в данном конфиге мы не используем Backend.
Файл shared/config/i18n/i18nForTests у меня имеет следующий вид:

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const ns = ['translation', 'main', 'about'];
const supportedLngs = ['ru', 'en'];
const resources = ns.reduce((acc, n) => {
supportedLngs.forEach((lng) => {
// @ts-ignore
if (!acc[lng]) acc[lng] = {};
// @ts-ignore
acc[lng] = {
// @ts-ignore
...acc[lng],
[n]: require(`../../../../public/locales/${lng}/${n}.json`),
};
});
return acc;
}, {});

i18n.use(initReactI18next).init({
lng: 'ru',
fallbackLng: 'ru',
debug: false,
defaultNS: 'translation',
ns,

interpolation: {
escapeValue: false, // not needed for react!!
},
supportedLngs,
resources,
});

export default i18n;

*/
