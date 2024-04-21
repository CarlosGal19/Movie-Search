import { useState, useEffect } from 'react';
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import './App.css'


function App() {

  const { movies: mappedMovies } = useMovies();
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log({title})
  }

  const handleChange = (e) => {
    const newTitle = e.target.value;
    if(newTitle.startsWith(' ')) return;
    setTitle(e.target.value)
  }
  useEffect(() => {
    if(title === ''){
      setError('Please enter a movie title');
      return;
    }
    setError(null)
  }, [title]);

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSumbit}>
          <input onChange={handleChange} style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} value={title} name='title' type="text" placeholder='Avengers, Star Wars, Interestellar, ...' />
          {/* The last button of a form, is type submit */}
          <button>Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          <Movies movies={mappedMovies} />
        }
      </main>
    </div>
  )
}

export default App
