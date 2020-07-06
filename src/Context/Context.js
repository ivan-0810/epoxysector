import React, { createContext, useState } from 'react';
import { LOCALES } from '../i18Provider'
export const Context = createContext({});

export const Provider = props => {
    const [locale, setLocale] = useState(LOCALES.ENGLISH);
    const [ isCarousel, setIsCarousel] = useState(false);//for gallery carousel
    const enLang = () => setLocale(LOCALES.ENGLISH);

    const mkLang = () => setLocale(LOCALES.MACEDONIAN);
console.log(isCarousel);

    
  const generalData = {
    locale,
    enLang,
    mkLang,
    isCarousel,
    setIsCarousel
  };

  return (
    <Context.Provider value={generalData}>
      {props.children}
    </Context.Provider>);
};
