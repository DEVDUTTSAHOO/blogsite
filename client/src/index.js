import React from 'react';
import  ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers/index';
import { GoogleOAuthProvider } from '@react-oauth/google';


import App from './App';

const store = createStore(reducers,compose(applyMiddleware(thunk)));


ReactDOM.render(
  <GoogleOAuthProvider clientId="477202079363-gcf9pvfoinmcui60ap1dvlcls7a36puc.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);