// Auth0ProviderWithHistory.js
import React from 'react';
import { Auth0Provider as BaseAuth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {


  return (
    <BaseAuth0Provider
      domain="dev-i4zmtik242m7iqeq.us.auth0.com"
      clientId="Tnox90ZO4kGwlTFRIahO0tYRCAczPZzk"
      authorizationParams={{ redirect_uri: window.location.origin }}

    >
      {children}
    </BaseAuth0Provider>
  );
};

export default Auth0ProviderWithHistory;
