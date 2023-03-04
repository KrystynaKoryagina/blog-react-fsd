export const enum LangKey {
  EN = 'en',
  RU = 'ru',
}

export interface Lang {
  key: LangKey;
  displayName: string;
}

export const langConfig: Lang[] = [
  { key: LangKey.EN, displayName: 'en' },
  { key: LangKey.RU, displayName: 'ru' },
];
