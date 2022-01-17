import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Search from './components/Search';

function App() {
  const [searchvalue, setsearchvalue] = useState('');

  function getFullMovieDetails (id) {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=6c3a2d45`);
  }

  async function fetchSearchData (val) {
    let results = await fetch(`http://www.omdbapi.com/?s=${val}&apiKey=6c3a2d45`);
    results = await results.json();
    console.log(results);
    results && results.Search && Promise.all(results.Search.map((r) => getFullMovieDetails(r.imdbID)))
      .then(async(res)=> Promise.all(res.map(async(data) => await data.json())))
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
    <Container fluid>
      <Search searchvalue={getSearchresults} />
    </Container>
  );
}

export default App;
