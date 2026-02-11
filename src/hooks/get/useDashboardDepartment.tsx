import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Department } from '../../types/department';

export const useDepartment = () => {
  const [department, setDepartment] = useState<Department[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Department[]>('https://tt-jsonserver-01.alt-tools.tech/departments');
        setDepartment(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error('Erreur API tools', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchDepartment();
  }, []);

  return { department, loading, error };
};
