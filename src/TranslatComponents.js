import React, { Fragment, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import OurTables from './components/OurTables';
import Colours from './components/Colours';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import { I18nPropvider } from './i18Provider';
import { Context } from './Context/Context';


const TranslateComponents = () => {
    const { locale }  = useContext(Context);    
    return (
      <Fragment>
          <I18nPropvider locale={locale}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/our-tables" component={OurTables} />
            <Route path="/colours" component={Colours} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </BrowserRouter>
      </I18nPropvider> 
      </Fragment>
    );
  }
  
  export default TranslateComponents;