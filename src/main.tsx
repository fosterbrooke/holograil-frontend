import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppWrapper from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import '@fontsource/poppins';

// Ensure that the root element is of type HTMLElement
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);

// Call reportWebVitals to measure performance
reportWebVitals();
