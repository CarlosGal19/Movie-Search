import withResults from '../mocks/with-results.json'
// import withOutResults from '../mocks/no-results.json'

export default function useMovies() {
    const movies = withResults.Search || []

    const mappedMovies = movies.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    });

    return { movies: mappedMovies }
  }
