import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner } from 'react-bootstrap';
import Search from './components/Search';
import MovieList from './components/MovieList';

function App() {
  const [searchvalue, setsearchvalue] = useState('fast');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setinitialLoad] = useState(true);

  function getFullMovieDetails (id) {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=6c3a2d45`);
  }

  async function fetchSearchData (val) {
    setLoading(true);
    let results = await fetch(`http://www.omdbapi.com/?s=${val}&apiKey=6c3a2d45&p=1`);
    results = await results.json();
    if(results.Response === "False") setLoading(false);

    if(initialLoad && results.Response !== "False") {
      results.Search = [...results.Search.splice(0,2)];
      setinitialLoad(false);
    };
    results && results.Search && Promise.all(results.Search.map((r) => getFullMovieDetails(r.imdbID)))
      .then(async(res)=> Promise.all(res.map(async(data) => await data.json())))
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
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
      <h2>OMDB Database</h2>
      <Search searchvalue={setsearchvalue} />
      <div className='mt-3'>
        <h3>Movie List</h3>
        {
          !loading ? (movies.length > 0  ? <MovieList movieData={movies}/> : <p>No Data Available</p>) :
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      </div>
    </Container>
  );
}

export default App;
