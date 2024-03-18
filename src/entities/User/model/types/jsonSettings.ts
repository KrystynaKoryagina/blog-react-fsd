import { Theme } from '@/shared/lib/contexts/theme';

export interface JsonSettings {
  theme?: Theme;
  isFirstVisit?: boolean;
}

export interface JsonSettingsRequest {
  userId: string;
  jsonSettings: JsonSettings;
}
