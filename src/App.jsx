import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';
import './App.css';

function App() {

  const [sort, setSort] = useState(false);
  const {title, setTitle, error} = useSearch();
  const { movies: mappedMovies, loading, getMovies } = useMovies({title, sort});

  const debouncedGetMovies = useCallback(
    debounce(title => {
      console.log('Debounced', title);
      getMovies(title);
    }, 1000),
    []
  );

  const handleSumbit = (e) => {
    e.preventDefault();
    getMovies(title);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  const handleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    debouncedGetMovies(newTitle);
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSumbit}>
          <input onChange={handleChange} style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} value={title} name='title' type="text" placeholder='Avengers, Star Wars, Interestellar, ...' />
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          {/* The last button of a form, is type submit */}
          <button>Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Loading...</p> : null
        }
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
