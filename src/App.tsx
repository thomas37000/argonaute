import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          <img
            src='https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png'
            alt='Wild Code School logo'
          />
          Les Argonautes
        </h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
