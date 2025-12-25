
"use client";

import React, { createContext, useContext } from 'react';
import { dictionaries, Locale } from './dictionaries';

type Dictionary = typeof dictionaries.en;

interface LocaleContextType {
  locale: Locale;
  dictionary: Dictionary;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ 
  children, 
  locale 
}: { 
  children: React.ReactNode; 
  locale: Locale 
}) {
  const dictionary = dictionaries[locale];

  return (
    <LocaleContext.Provider value={{ locale, dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
