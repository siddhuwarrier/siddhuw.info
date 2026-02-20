import de from "./de.json";
import en from "./en.json";
import hi from "./hi.json";

export type Locale = "en" | "hi" | "de";
export type Messages = typeof en & {
  home: typeof en.home & {
    whatIDoSegments?: string[];
  };
};

export const locales: Locale[] = ["en", "hi", "de"];
export const defaultLocale: Locale = "en";

const messagesByLocale = {
  en,
  hi,
  de
};

export const getMessages = (locale: Locale): Messages => {
  return messagesByLocale[locale];
};

export const languageNames: Record<Locale, string> = {
  en: "English",
  hi: "Hindi",
  de: "Deutsch"
};

export const localizedPath = (locale: Locale, pageId: "home" | "contact" | "cv"): string => {
  const basePath = pageId === "home" ? "/" : `/${pageId}`;
  if (locale === defaultLocale) {
    return basePath;
  }
  return pageId === "home" ? `/${locale}` : `/${locale}/${pageId}`;
};
