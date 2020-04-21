import { useState, useEffect } from 'react';
import counterService from '../services/countService';

export default () => {
    const [initialCount, setInitialCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const data = await counterService();
        setInitialCount(data);
        setTimeout(function() {
            setIsLoading(false);
          }, 2000);
      };
  
      fetchData();
    }, []);

    return {
        initialCount,
        isLoading
    };
};