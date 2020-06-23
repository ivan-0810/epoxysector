import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import OurTables from './components/OurTables';
import Colours from './components/Colours';
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs"



function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
