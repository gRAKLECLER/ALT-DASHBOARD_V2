import { useState, useEffect } from 'react';
import axios from 'axios';
import type { UserTool } from '../../types/user-tools';

export const useTools = () => {
  const [userTool, setUserTool] = useState<UserTool[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const response = await axios.get<UserTool[]>('https://tt-jsonserver-01.alt-tools.tech/user_tools');
        setUserTool(response.data);
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

  return { userTool, loading, error };
};
