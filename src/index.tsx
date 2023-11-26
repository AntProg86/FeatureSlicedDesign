import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { rootReducer } from '../app/rootReducer';

import Application from '../src/app';

const root = document.getElementById('root');

if (root) {
  {
    ReactDOM.render((
      <Application />
      // <>
      //   Application
      // </>
      // <Application />
      //Предоставляет доступ к Redux Store
      // <Provider store={ rootReducer }>
      //     <HashRouter>
      //         <Application />
      //     </HashRouter>
      // </Provider>
    ), root);
  } 
}