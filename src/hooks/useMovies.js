import { useState } from 'react';
// import withResults from '../mocks/with-results.json'
import withOutResults from '../mocks/no-results.json'

export default function useMovies({title}) {

  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search || []

  const mappedMovies = movies.map(movie => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }
  });

    const getMovies = () => {
      if(title){
        // setResponseMovies(withResults)
        fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${title}`)
        .then(response => response.json())
        .then(data => setResponseMovies(data))
      }else{
        setResponseMovies(withOutResults)
      }
    }

    return { movies: mappedMovies, getMovies}
  }
