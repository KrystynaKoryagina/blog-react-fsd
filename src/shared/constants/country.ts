import { SelectOption } from 'shared/ui/Select';

export const COUNTRY = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine',
  Kazakhstan: 'Kazahstan',
  Armenia: 'Armenia',
  USA: 'USA',
  Canada: 'Canada',
} as const;

export type Country = ValueOf<typeof COUNTRY>;

export const countryOptions: SelectOption<Country>[] = Object.entries(COUNTRY)
  .map(([key, value]) => ({
    value: key as Country,
    content: value,
  }));
