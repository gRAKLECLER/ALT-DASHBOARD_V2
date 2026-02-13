import { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import type { Tools } from "../../types/tools";

interface Props {
  tools: Tools[] | null;
}

export const MonthlySpendEvolution = ({ tools }: Props) => {
  const data = useMemo(() => {
    const monthlyMap: Record<string, number> = {};

    tools?.forEach((tool) => {
      if (!tool.created_at || !tool.monthly_cost) return;

      const date = new Date(tool.created_at);
      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;

      monthlyMap[monthKey] =
        (monthlyMap[monthKey] || 0) + Number(tool.monthly_cost);
    });

    return Object.entries(monthlyMap)
      .map(([month, total]) => ({
        month,
        total,
      }))
      .sort((a, b) => (a.month > b.month ? 1 : -1));
  }, [tools]);

  return (
    <div className="mb-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Monthly Spend Evolution
        </h2>
        <p className="text-sm text-gray-400">
          Total tool spending over time
        </p>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              stroke="#9CA3AF"
              tick={{ fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                borderRadius: "12px",
                border: "none",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="total"
              stroke="#6366F1"
              strokeWidth={3}
              fill="url(#colorSpend)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
