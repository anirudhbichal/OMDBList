import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [searchvalue, setsearchvalue] = useState('');

  async function fetchSearchData (val) {
    let results = await fetch(`http://www.omdbapi.com/?s=${val}&apiKey=6c3a2d45`);
    results = await results.json();
    console.log(results);
  };

  useEffect(() => {
    fetchSearchData(searchvalue);
  }, [searchvalue])

  const getSearchresults = (event) => {
    if(event.target.value.length > 3) {
      setsearchvalue(event.target.value);
    }
  }

  return (
    <div className="App">
      <input type="text" name="search" onChange={getSearchresults}/>
    </div>
  );
}

export default App;
