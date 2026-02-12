import type { ToolStatus, ToolCategory } from "./tools";

export interface ToolFilters {
  status?: ToolStatus;
  department_id?: number;
  category?: ToolCategory;
  minCost?: number;
  maxCost?: number;
  search?: string;
  page?: number;
  limit?: number;
  sort?: "name" | "monthly_cost" | "updated_at";
  order?: "asc" | "desc";
}
