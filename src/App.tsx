import { Switch } from '@material-ui/core';
import React from 'react';
import './App.scss';
import CreatePassword from './components/create-password';
import LoginPage from './pages/login';

function App() {
  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
