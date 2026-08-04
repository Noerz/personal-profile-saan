export type Theme = "dark" | "light" | "system";
export type Language = "id" | "en";

export interface SettingsState {
  theme: Theme;
  language: Language;
  notifications: boolean;
}
