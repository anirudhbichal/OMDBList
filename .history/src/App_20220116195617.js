import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [searchvalue, setsearchvalue] = useState('');

  function getFullMovieDetails (id) {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=6c3a2d45`);
  }

  async function fetchSearchData (val) {
    let results = await fetch(`http://www.omdbapi.com/?s=${val}&apiKey=6c3a2d45`);
    results = await results.json();
    results && results.Search && Promise.all(results.Search.map((r) => getFullMovieDetails(r.imdbID)))
      .then(response => {
        return response.map(d => d.json());
      })
      .then(data => {
        console.log(data);
      });
  };

  useEffect(() => {
    if(searchvalue !== '') {
      fetchSearchData(searchvalue);
    }
  }, [searchvalue]);

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
