import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner } from 'react-bootstrap';
import Search from './components/Search';
import MovieList from './components/MovieList';

function App() {
  const [searchvalue, setsearchvalue] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  function getFullMovieDetails (id) {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=6c3a2d45`);
  }

  async function fetchSearchData (val) {
    setLoading(true);
    let results = await fetch(`http://www.omdbapi.com/?s=${val}&apiKey=6c3a2d45`);
    results = await results.json();
    console.log(results);
    results && results.Search && Promise.all(results.Search.map((r) => getFullMovieDetails(r.imdbID)))
      .then(async(res)=> Promise.all(res.map(async(data) => await data.json())))
      .then(data => {
        setMovies(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    if(searchvalue !== '') {
      fetchSearchData(searchvalue);
    }
  }, [searchvalue]);

  return (
    <Container fluid>
      <Search searchvalue={setsearchvalue} />
      {
        !loading ? (movies.length > 0  ? <MovieList movieData={movies}/> : <p>No Data Available</p>) :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
    </Container>
  );
}

export default App;
