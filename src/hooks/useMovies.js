import { useState } from 'react';
import { searchMovies } from '../services/movies';

export default function useMovies({ title }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      setLoading(true);
      setError(null);
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
