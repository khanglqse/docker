import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://api.khang.test')
      .then(response => response.json())
      .then(data => setData(data));
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(data)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
