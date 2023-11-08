import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Importe o backend

i18n
    .use(Backend) // Use o backend
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt', // Idioma padrão
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            // Diretório onde suas traduções estão armazenadas
            loadPath: 'tradução/{{lng}}.json',
            allowMultiLoading: true, // Permitir o carregamento de várias traduções
        },
        supportedLngs: ['pt', 'en', 'es', 'it', 'fr'], // Lista de idiomas suportados
        ns: ['translation'], // Namespace das traduções (pode ser personalizado)
        defaultNS: 'translation', // Namespace padrão
        react: {
            useSuspense: true, // Desativar o uso de Suspense para carregamento de traduções
        },
    });

export default i18n;