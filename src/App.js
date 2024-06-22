import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    fetch('/Process.txt')
      .then(response => response.text())
      .then(text => setFileContent(text))
      .catch(error => console.error('Error fetching the text file:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <p>
          Github Running Serverless.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Content of the Text File:</h2>
        <pre>{fileContent}</pre>
      </header>
    </div>
  );
}

export default App;
