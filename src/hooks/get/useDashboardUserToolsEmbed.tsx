import { useState, useEffect } from 'react';
import axios from 'axios';
import type { UserToolEmbed } from '../../types/user-tools-embed';

export const useToolsEmbed = () => {
  const [userToolEmbed, setUserToolEmbed] = useState<UserToolEmbed[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const response = await axios.get<UserToolEmbed[]>('https://tt-jsonserver-01.alt-tools.tech/tools?_embed=user_tools');
        setUserToolEmbed(response.data);
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

  return { userToolEmbed, loading, error };
};
