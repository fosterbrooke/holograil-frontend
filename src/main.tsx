import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppWrapper from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter as Router } from 'react-router-dom';

// Ensure that the root element is of type HTMLElement
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppWrapper />
    </Router>
    <SpeedInsights />
  </Provider>
);

// Call reportWebVitals to measure performance
reportWebVitals();
