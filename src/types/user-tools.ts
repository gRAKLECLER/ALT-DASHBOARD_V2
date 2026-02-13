export type UsageFrequency = "daily" | "weekly" | "monthly";

export type ProficiencyLevel = 
  | "beginner"
  | "intermediate"
  | "expert";

export interface UserTool {
  user_id: number;
  tool_id: number;
  usage_frequency: UsageFrequency;
  last_used: string;
  proficiency_level: ProficiencyLevel;
}
