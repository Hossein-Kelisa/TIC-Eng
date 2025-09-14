import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fa from './locales/fa.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa }
    },
    lng: localStorage.getItem('i18nextLng') || 'en', // initial language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false } // simpler for now
  });

// Keep HTML lang + body dir and save choice
i18n.on('languageChanged', (lng) => {
  try {
    document.documentElement.lang = lng;
    document.body.dir = lng === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('i18nextLng', lng);
  } catch {
    // ignore if server-side or no document
  }
});

export default i18n;
