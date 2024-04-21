import { useState, useEffect } from 'react';

export default function useSearch(){

    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
      if(title === ''){
        setError('Please enter a movie title');
        return;
      }
      setError(null)
    }, [title]);

    return {title, setTitle, error}

  }
