import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './components/App/App';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector, TypedUseSelectorHook, Provider } from "react-redux";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

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

