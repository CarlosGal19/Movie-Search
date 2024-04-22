const API_KEY = '4287ad07';

export const searchMovies = async (title) => {
  if (title === '') return null;
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
    const data = await response.json();

    const movies = data.Search;

    const mappedMovies = movies.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    });

    return mappedMovies;

  } catch (error) {
    throw new Error('Error fetching movies');
  }
}
