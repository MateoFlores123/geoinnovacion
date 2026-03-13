"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "ES" | "EN";

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; }

const Ctx = createContext<LangCtx>({ lang: "ES", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ES");
  const setLang = useCallback((l: Lang) => setLangState(l), []);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() { return useContext(Ctx); }