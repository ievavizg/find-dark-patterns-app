import * as React from 'react';
import strings from './dictionary';

export function useLanguage() {
  return React.useContext(LanguageContext);
}

type LanguageContextType = {
  lang: string;
  strings: any;
  changeLanguage(language: string): void;
};

export const LanguageContext = React.createContext<LanguageContextType>({
  lang: strings.getLanguage(),
  strings,
  // tslint:disable-next-line: no-empty
  changeLanguage: () => {},
});

const LangProvider = (props: {
  children: React.ReactNode;
  locale: string;
  dictionary?: any;
}) => {
  const dictionary = props.dictionary ? props.dictionary : strings;
  const [lang, setLang] = React.useState(props.locale);
  const changeLanguage = (language: string) => {
    dictionary.setLanguage(language);
    setLang(language);
  };

  const value = React.useMemo(
    () => ({
      changeLanguage,
      strings: dictionary,
      lang,
    }),
    [strings, lang, dictionary],
  );
  return (
    <LanguageContext.Provider value={value}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LangProvider;
