import React from 'react';
import ReactDOM from "react-dom/client";
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { rootReducer } from '../app/rootReducer';

import Application from '../src/app';
//const root = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

if (root) {
  {
    root.render(
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    );
  } 
}

{/* <Provider store={ rootReducer }>
        
</Provider> */}


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