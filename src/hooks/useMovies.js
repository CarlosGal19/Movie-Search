import { useState, useRef, useMemo } from 'react';
import { searchMovies } from '../services/movies';

export default function useMovies({ title, sort }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(title);

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

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { movies: sortedMovies, getMovies, error, loading }
}
