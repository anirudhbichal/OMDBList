import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Spinner } from 'react-bootstrap';
import Search from './components/Search';
import MovieList from './components/MovieList';

function App() {
  const [searchvalue, setsearchvalue] = useState('fast');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setinitialLoad] = useState(true);
  const [pageNumber, setpageNumber] = useState(1);
  const [disableShowMore, setdisableShowMore] = useState(false);

  function getFullMovieDetails (id) {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=6c3a2d45`);
  }

  async function fetchSearchData (val) {
    setLoading(true);
    let results = await fetch(`http://www.omdbapi.com/?s=${val}&apiKey=6c3a2d45&page=${pageNumber}`);
    results = await results.json();
    if(results.Response === "False") {
      setLoading(false);
      setdisableShowMore(true);
    }

    if(initialLoad && results.Response !== "False") {
      results.Search = [...results.Search.splice(0,2)];
      setinitialLoad(false);
      setdisableShowMore(true);
    };
    results && results.Search && Promise.all(results.Search.map((r) => getFullMovieDetails(r.imdbID)))
      .then(async(res)=> Promise.all(res.map(async(data) => await data.json())))
      .then(data => {
        const movieData = [...movies, ...data];
        setMovies(movieData);
        setLoading(false);
        setdisableShowMore(false);
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
  }, [searchvalue, pageNumber]);

  const showMoreClicked = () => {
    setpageNumber(pageNumber + 1);
  }

  return (
    <Container fluid>
      <h2>OMDB Database</h2>
      <Search searchvalue={setsearchvalue} />
      <div className='my-3'>
        <h3>Movie List</h3>
        {
          !loading ? (movies.length > 0  ? <MovieList movieData={movies}/> : <p>No Data Available</p>) :
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      </div>
      <Button onClick={showMoreClicked} disabled={disableShowMore}>Show More</Button>
    </Container>
  );
}

export default App;
