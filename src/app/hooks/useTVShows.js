import { useState, useEffect } from 'react';

const useTVShows = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.tvmaze.com/shows`);
        const data = await response.json();
        setShows(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShows();
  }, []);

  return { shows, isLoading, error };
};

export default useTVShows;
