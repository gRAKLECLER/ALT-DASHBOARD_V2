import { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import type { Tools } from "../../types/tools";

interface Props {
  tools: Tools[] | null;
}

export const GrowthTrends = ({ tools }: Props) => {
  const data = useMemo(() => {
    const monthlyMap: Record<string, number> = {};

    tools?.forEach((tool) => {
      if (!tool.created_at) return;

      const date = new Date(tool.created_at);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;

      monthlyMap[monthKey] = (monthlyMap[monthKey] || 0) + 1;
    });

    return Object.entries(monthlyMap)
      .map(([month, count]) => ({
        month,
        count,
      }))
      .sort((a, b) => (a.month > b.month ? 1 : -1));
  }, [tools]);

  return (
    <div className="bg-white rounded-2xl mb-4 p-6 shadow-sm border border-gray-100">
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Growth Trends
        </h2>
        <p className="text-sm text-gray-400">
          New tools added over time
        </p>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" allowDecimals={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#6366F1"
              fill="#6366F1"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
