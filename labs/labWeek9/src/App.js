import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>

        <p>Your Student ID: <strong>101234567</strong></p>
        <p>Your Name: <strong>Breno Mafra</strong></p>
        <p>George Brown College, Toronto</p>

        <Student
          sid={101234567}
          fnm="Breno"
          lnm="Mafra"
          result="Pass"
          city="Toronto"
        />
      </header>
    </div>
  );
}

export default App;
