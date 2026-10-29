import { ui, type Lang, type UIKey } from './ui';

export type { Lang, UIKey };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return lang === 'en' ? 'en' : 'es';
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}

export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '/' : path;
  return lang === 'en' ? `/en${clean === '/' ? '/' : clean}` : clean;
}

export function stripLangPrefix(pathname: string): string {
  return pathname.replace(/^\/en/, '') || '/';
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}
