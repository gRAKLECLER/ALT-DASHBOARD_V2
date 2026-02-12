export type ToolStatus =
  | "active"
  | "unused"
  | "expiring"
  | "disabled"
  | "archived";

export type ToolCategory =
  | "communication"
  | "development"
  | "design"
  | "marketing"
  | "productivity"
  | "analytics";

export interface Tools {
  id: number;
  name: string;
  description: string;
  vendor: string;
  category: string;
  owner_department: string;
  status: ToolStatus;
  website_url: string;
  icon_url: string;
  monthly_cost?: number | string;
  previous_month_cost?: number | string;
  active_users_count?: number | string;
  created_at?: string;
  updated_at?: string;
}
