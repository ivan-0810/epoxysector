import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context/Context';
import TranslateButttons from './components/TranslateButtons/TranslateButtons';

import TranslateComponents from './TranslatComponents';

const App = () => {
  return (
    <div className="App">
      <Provider>
        <TranslateButttons />
        <TranslateComponents />
      </Provider>
    </div>
  );
};

export default App;
