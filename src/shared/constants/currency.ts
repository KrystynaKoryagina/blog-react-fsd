import { SelectOption } from '@/shared/ui/deprecated/Select';

export const CURRENCY = {
  UAH: 'UAH',
  EUR: 'EUR',
  USD: 'USD',
} as const;

export type Currency = ValueOf<typeof CURRENCY>;

export const currencyOptions: SelectOption<Currency>[] = Object.entries(
  CURRENCY,
).map(([key, value]) => ({
  value: key as Currency,
  content: value,
}));
