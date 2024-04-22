import { useState, useRef } from 'react';
import { searchMovies } from '../services/movies';

export default function useMovies({ title }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(title);

  const getMovies = async () => {
    if(previousSearch.current === title) return;
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

  return { movies, getMovies, error, loading }
}
