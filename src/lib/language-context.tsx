"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { translations, type Language, type Translations } from "@/lib/translations";

type LanguageContextType = {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio_lang_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio_lang_change", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "es";
  const saved = localStorage.getItem("portfolio_lang");
  return saved === "en" || saved === "es" ? saved : "es";
}

function getServerSnapshot(): Language {
  return "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = (newLang: Language) => {
    localStorage.setItem("portfolio_lang", newLang);
    window.dispatchEvent(new Event("portfolio_lang_change"));
  };

  const toggleLang = () => {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang,
        setLang,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
