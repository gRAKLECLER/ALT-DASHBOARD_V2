import { GrowthTrends } from "../components/Analysis/GrowthTrend";
import { MonthlySpendEvolution } from "../components/Analysis/MonthlySpendEvolution";
import { ToolUsageRanking } from "../components/Analysis/ToolUsageRanking";
import { TopExpensiveToolsChart } from "../components/Analysis/TopExpensiveTools";
import { UnusedToolsWarnings } from "../components/Analysis/UnusedToolsWarning";
import { useTools } from "../hooks/get/useDashboardTools";
import { useUnusedTools } from "../hooks/get/useUnusedTools";

function Analytics() {
  const { unusedTools } = useUnusedTools();
  const { tools = [], loading, error } = useTools();

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8">Error: {error}</div>;

  return (
    <div className="p-6 md:p-8 space-y-8 bg-gray-50 min-h-screen">
      
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Analytics Overview
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Monitor tool performance and optimization opportunities.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TopExpensiveToolsChart tools={tools} topN={5} />
        <ToolUsageRanking tools={tools} />
      </div>
      <div>
        <MonthlySpendEvolution tools={tools}/>
        <GrowthTrends tools={tools} />
        <UnusedToolsWarnings tools={unusedTools} />
      </div>

    </div>
  );
}

export default Analytics;
