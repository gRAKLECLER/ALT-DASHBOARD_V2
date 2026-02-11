import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Tools } from '../../types/tools';

export const useTools = () => {
  const [tools, setTools] = useState<Tools[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Tools[]>('https://tt-jsonserver-01.alt-tools.tech/tools');
        setTools(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error('Erreur API tools', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  return { tools, loading, error };
};
