
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tamilTranslations from '../locales/tamil.json'; 
import englishTranslations from '../locales/english.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tamil: {
        translation: tamilTranslations,
      },
      english: {
        translation: englishTranslations,
      },
    
    },
    lng: 'english', 
    fallbackLng: 'english',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
