// hooks/useToolFilters.ts

import { useState } from "react";
import type { ToolFilters } from "../../types/tools-filter";

interface UseToolFiltersReturn {
  filters: ToolFilters;
  updateFilter: <K extends keyof ToolFilters>(
    key: K,
    value: ToolFilters[K]
  ) => void;
  resetFilters: () => void;
}

export const useToolFilters = (): UseToolFiltersReturn => {
  const [filters, setFilters] = useState<ToolFilters>({});

  const updateFilter = <K extends keyof ToolFilters>(
    key: K,
    value: ToolFilters[K]
  ): void => {
    setFilters((prev) => ({
      ...prev,
      [key]: value || undefined,
    }));
  };

  const resetFilters = (): void => {
    setFilters({});
  };

  return { filters, updateFilter, resetFilters };
};
