import { useDashboardAnalytics } from "../../hooks/get/useDashboardAnalytics";
import { useDepartment } from "../../hooks/get/useDashboardDepartment";
import { useTools } from "../../hooks/get/useDashboardTools";
import { StatCard } from "./StatCard";

export const StatsGrid = () => {

    const { tools} = useTools();
    const { analytics } = useDashboardAnalytics();
    const { department } = useDepartment();
  return (
    <div className="
    desktop:flex desktop:gap-8
    tablet:grid grid-cols-1 gap-4
    tablet:grid-cols-2 tablet:gap-6
  ">
      <StatCard
        title="Monthly Budget"
        value={`${analytics?.budget_overview.current_month_total}`}
        maxValue={`${analytics?.budget_overview.monthly_limit}`}
        percentage={analytics?.kpi_trends.budget_change ?? ''}
        />
    <StatCard
        title="Active tools"
        value={`${tools?.length}`}
        percentage={analytics?.kpi_trends.tools_change ?? ''}
        />
    <StatCard
        title="Department"
        value={`${department?.length}`}
        percentage={analytics?.kpi_trends.departments_change ?? ''}
        />
    <StatCard
        title="Cost/User"
        value={`€${analytics?.cost_analytics.cost_per_user}`}
        percentage={analytics?.kpi_trends.cost_per_user_change ?? ''}
        />            
    </div>
  );
};
