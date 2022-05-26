import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './components/App/App';
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore({
  reducer: rootReducer
})


render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>
      <App />
      </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);