import type { UserTool } from "./user-tools";

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

export interface UserToolEmbed {
  id: number;
  name: string;
  description: string;
  vendor: string;
  category: ToolCategory | string; 
  owner_department: string;
  status: ToolStatus;
  website_url: string;
  icon_url: string;

  monthly_cost: number;
  active_users_count: number;

  created_at?: string;
  updated_at?: string;

  user_tools: UserTool[]; // 👈 important pour _embed
}
