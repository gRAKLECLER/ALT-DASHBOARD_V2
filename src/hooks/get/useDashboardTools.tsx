import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import type { Tools } from "../../types/tools";
import type { ToolFilters } from "../../types/tools-filter";

interface UseToolsReturn {
  tools: Tools[] | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const BASE_URL =
  "https://tt-jsonserver-01.alt-tools.tech/tools";

export const useTools = (
  filters?: ToolFilters
): UseToolsReturn => {
  const [tools, setTools] = useState<Tools[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const buildQueryParams = (
    filters: ToolFilters
  ): Record<string, string | number> => {
    const params: Record<string, string | number> = {};

    if (filters.department_id)
      params.department_id = filters.department_id;

    if (filters.status)
      params.status = filters.status;

    if (filters.category)
      params.category = filters.category;

    if (filters.search)
      params.name_like = filters.search;

    if (filters.minCost)
      params.monthly_cost_gte = filters.minCost;

    if (filters.maxCost)
      params.monthly_cost_lte = filters.maxCost;

    return params;
  };

  const fetchTools = async (): Promise<void> => {
    try {
      setLoading(true);

      const params = filters
        ? buildQueryParams(filters)
        : {};

      const response = await axios.get<Tools[]>(
        BASE_URL,
        { params }
      );

      setTools(response.data);
      setError(null);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(
        axiosError.message || "Unknown error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTools();
  }, [JSON.stringify(filters)]); 
  // stringify évite dépendance objet instable

  return { tools, loading, error, refetch: fetchTools };
};
