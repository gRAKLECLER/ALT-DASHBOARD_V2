import { useState, useEffect } from 'react';
import axios from 'axios';
import type { DashboardAnalyticsResponse } from '../../types/analytics';

export const useDashboardAnalytics = () => {
  const [analytics, setAnalytics] = useState<DashboardAnalyticsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const response = await axios.get<DashboardAnalyticsResponse>('https://tt-jsonserver-01.alt-tools.tech/analytics');
        setAnalytics(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error('Erreur API analytics', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return { analytics, loading, error };
};
