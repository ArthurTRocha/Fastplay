import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Importe o backend


i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt', // Idioma padrão
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: 'tradução/{{lng}}.json',
            allowMultiLoading: true,
        },
        ns: ['translation'],
        defaultNS: 'translation',
        react: {
            useSuspense: true,
        },
    });

export default i18n;