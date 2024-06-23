import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";
import { Settings } from './settings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
Providers.globalProvider = new Msal2Provider({
  clientId: Settings.clientId,
  authority: Settings.authority,
  //scopes: ['user.read', 'calendars.read']
  redirectUri: window.location.origin
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
