import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'
import './App.css';

function App() {

  const {title, setTitle, error} = useSearch();
  const { movies: mappedMovies, getMovies } = useMovies({title});

  const handleSumbit = (e) => {
    e.preventDefault();
    getMovies();
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }


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
