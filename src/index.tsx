import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore({
  reducer: rootReducer
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<Provider store={store}>
  <Router>
      <App />
      </Router>
  </Provider>
  </React.StrictMode>
);
