import { useDashboardAnalytics } from "../../hooks/get/useDashboardAnalytics";
import { useDepartment } from "../../hooks/get/useDashboardDepartment";
import { useTools } from "../../hooks/get/useDashboardTools";
import { StatCard } from "./StatCard";
import { TrendingUp, Wrench, Building, User } from "lucide-react";


export const StatsGrid = () => {

    const { tools} = useTools();
    const { analytics } = useDashboardAnalytics();
    const { department } = useDepartment();
  return (
    <div className="p-6 lg:p-8 space-y-8">
    <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Tools Catalog
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and monitor all SaaS tools across your organization
        </p>
      </div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
<StatCard
  title="Monthly Budget"
  value={`${analytics?.budget_overview.current_month_total}`}
  maxValue={`${analytics?.budget_overview.monthly_limit}`}
  percentage={analytics?.kpi_trends.budget_change ?? ''}
  variant="green"
  icon={<TrendingUp size={18} />}
  isCurrency
/>

<StatCard
  title="Active tools"
  value={`${tools?.length}`}
  percentage={analytics?.kpi_trends.tools_change ?? ''}
  variant="violet"
  icon={<Wrench size={18} />}
/>

<StatCard
  title="Department"
  value={`${department?.length}`}
  percentage={analytics?.kpi_trends.departments_change ?? ''}
  variant="orange"
  icon={<Building size={18} />}
/>

<StatCard
  title="Cost/User"
  value={analytics?.cost_analytics.cost_per_user ?? 0}
  percentage={analytics?.kpi_trends.cost_per_user_change ?? ''}
  variant="red"
  icon={<User size={18} />}
  isCurrency
/>

</div>

    </div>
    
  );
};
