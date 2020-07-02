import React, { createContext, useState } from 'react';
import { LOCALES } from '../i18Provider'
export const Context = createContext({});

export const Provider = props => {
    const [locale, setLocale] = useState(LOCALES.ENGLISH);
   
    const enLang = () => setLocale(LOCALES.ENGLISH);

    const mkLang = () => setLocale(LOCALES.MACEDONIAN);

    
  const generalData = {
    locale,
    enLang,
    mkLang,
  };

  return (
    <Context.Provider value={generalData}>
      {props.children}
    </Context.Provider>);
};
