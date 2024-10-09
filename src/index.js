import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ShopContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopContextProvider>
  
);


