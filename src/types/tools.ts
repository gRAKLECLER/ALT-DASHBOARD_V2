export type SubscriptionStatus = "active" | "unused" | "expiring";

export interface Tools {
  id: number;
  name: string;
  description: string;
  vendor: string;
  category: string;
  owner_department: string;
  status: SubscriptionStatus;
  website_url: string;
  icon_url: string;
  monthly_cost?: number | string;
  previous_month_cost?: number | string;
  active_users_count?: number | string;
  created_at?: string;
  updated_at?: string;
}
