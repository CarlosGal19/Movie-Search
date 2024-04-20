// import { useEffect, useState } from 'react'
import Movies from './components/Movies'
import withResults from './mocks/with-results.json'
import './App.css'

function App() {

  const movies = withResults.Search || []

  const mappedMovies = movies.map(movie => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  });

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
