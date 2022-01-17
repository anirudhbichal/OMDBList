import logo from './logo.svg';
import './App.css';

function App() {

  const getSearchresults = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" name="search" onChange={getSearchresults}/>
    </div>
  );
}

export default App;
