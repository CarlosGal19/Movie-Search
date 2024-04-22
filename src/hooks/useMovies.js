import { useState, useRef, useMemo } from 'react';
import { searchMovies } from '../services/movies';

export default function useMovies({ title, sort }) {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(title);

  // Get the movies from the API and set the state accordingly
  const getMovies = useMemo(() => {
    return async (title) => {
      if (previousSearch.current === title) return;
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = title;
        const movies = await searchMovies(title);
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  // Sort the movies by title
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { movies: sortedMovies, getMovies, error, loading }
}
