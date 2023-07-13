import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from '@pages/home';

import '@fonts';
import '@variables';
import '@global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
