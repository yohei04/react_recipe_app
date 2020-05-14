import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = '62cd9b33';
  const APP_KEY = '491358775bd46b1d16c869d01f83baf7';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('effect has been run');
  }, []);


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" />
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
