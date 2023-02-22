/*
 * @Date: 2023-01-15 16:29:13
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-22 23:45:06
 * @FilePath: \Jira\src\App.tsx
 * @Description: 
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth } from 'context/auth-context';
import { AuthenticatedApp } from 'authenticated-app';
import { UnauthenticatedApp } from 'unauthenticated-app';

function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TryUseArray/> */}
      {/* <LoginScreen/> */}
      {user?<AuthenticatedApp/>:<UnauthenticatedApp/>}
    </div>
  );
}

export default App;
