// TODO failed
// Чтобы test:ui проходил без доступа к json-server, не ломаясь на ошибке

// FAIL chrome.docker/chrome.iphone7/Pages/ProfilePage
// Light
// 2 requests failed to load; http://192.168.100.19:8000/profile, http://192.168.100.19:8000/profile

// в package.json добавляем игнор на ошибки при запросах
// https://loki.js.org/configuration.html#fetchfailignore
// https://github.com/oblador/loki/blob/master/examples/react/loki.config.js

// "loki": {
// "fetchFailIgnore": ".*",
// "configurations": {

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { CURRENCY } from '@/shared/constants/currency';
import { COUNTRY } from '@/shared/constants/country';
import { Theme } from '@/shared/lib/contexts/theme';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => (
  <ProfilePage />
);

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({
  profile: {
    data: {
      firstName: 'Krystyna',
      lastName: 'Koryagina',
      age: 33,
      currency: CURRENCY.USD,
      country: COUNTRY.Ukraine,
      city: 'Kharkov',
      username: 'admin',
      avatar: 'https://kartinkin.net/uploads/posts/2022-12/1670281496_6-kartinkin-net-p-kartinka-bukhgalter-vkontakte-6.png',
    },
  },
})];

export const Dark = Template.bind({});
Dark.parameters = { theme: Theme.DARK };
Dark.decorators = [StoreDecorator({
  profile: {
    data: {
      firstName: 'Krystyna',
      lastName: 'Koryagina',
      age: 33,
      currency: CURRENCY.USD,
      country: COUNTRY.Ukraine,
      city: 'Kharkov',
      username: 'admin',
      avatar: 'https://kartinkin.net/uploads/posts/2022-12/1670281496_6-kartinkin-net-p-kartinka-bukhgalter-vkontakte-6.png',
    },
  },
})];
