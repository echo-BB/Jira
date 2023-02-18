/*
 * @Date: 2023-01-15 16:29:13
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-18 17:04:35
 * @FilePath: \Jira\src\index.tsx
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { loadDevTools } from "jira-dev-tool";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


loadDevTools(()=>root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
))





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
