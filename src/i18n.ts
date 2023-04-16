import { createI18n } from 'solid-i18n';
import { DateTimePreset, NumberPreset } from './enums';

const DEFAULT_LANG = 'en';

export const i18n = createI18n({
  language: DEFAULT_LANG,
  presets: {
    number: {
      [NumberPreset.Default]: { minimumFractionDigits: 0, maximumFractionDigits: 0 },
      [NumberPreset.Fraction]: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
    },
    dateTime: {
      [DateTimePreset.Default]: { day: 'numeric', month: 'short', year: 'numeric' },
      [DateTimePreset.Full]: { day: 'numeric', month: 'long', year: 'numeric' },
      [DateTimePreset.Simple]: { day: 'numeric', month: 'short' },
    },
  },
});

export async function changeLanguage(language: string) {
  i18n.setLanguage(language);

  if (language !== DEFAULT_LANG && !(language in i18n.locales)) {
    const module = await import(`./languages/${language}.json`);
    i18n.setLocales(module.default);
  }
}
