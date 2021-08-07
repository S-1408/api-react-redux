import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// we need to import provider which will actually provide the redux store in react application
import {Provider} from 'react-redux';
import store from './redux/store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
 
  </React.StrictMode>,
  document.getElementById('root')
);

