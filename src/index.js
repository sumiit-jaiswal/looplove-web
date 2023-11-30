// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Auth0ProviderWithHistory from './utils/auth0Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);
