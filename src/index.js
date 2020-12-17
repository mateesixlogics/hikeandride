import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './App.css';
require('dotenv').config()

const client = Client.buildClient({
  storefrontAccessToken: 'ece1940313c79b6322d204c2dd2d63ee',
  domain: 'dev-24.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
