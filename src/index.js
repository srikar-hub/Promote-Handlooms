import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './Context/Context';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <GoogleOAuthProvider clientId="1008604247484-kglgr7lnnbnns9eaha122baevlbg02hl.apps.googleusercontent.com">
   <ShopContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopContextProvider>
    </GoogleOAuthProvider>
  
);


