import { useEffect, useState } from 'react'
import Movies from './components/Movies'
import './App.css'

function App() {

  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);

  let id = "4287ad07";

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${id}&s=${title}`)
      .then(response => response.json())
      .then(data => setMovies(data.Search));
  }, [title]);

  const handleClick = (e) => {
    e.preventDefault();
    setTitle(e.target.previousElementSibling.value);
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form>
          <input type="text" placeholder='Avengers, Star Wars, Interestellar, ...' />
          {/* The last button of a form, is type submit */}
          <button onClick={handleClick}>Search</button>
        </form>
      </header>
      <main>
        {
          <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
