// import { useEffect, useState } from 'react'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import './App.css'


function App() {

  const { movies: mappedMovies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form>
          <input type="text" placeholder='Avengers, Star Wars, Interestellar, ...' />
          {/* The last button of a form, is type submit */}
          <button>Search</button>
        </form>
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
