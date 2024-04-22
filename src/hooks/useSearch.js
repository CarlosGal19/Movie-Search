import { useState, useEffect, useRef } from 'react';

export default function useSearch() {

    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = title === '';
            return;
        }
        if (title === '') {
            setError('Please enter a movie title');
            return;
        }
        setError(null)
    }, [title]);

    return { title, setTitle, error }

}
