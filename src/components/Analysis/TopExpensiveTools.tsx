import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";
import type { Tools } from "../../types/tools";

interface TopExpensiveToolsChartProps {
  tools: Tools[] | null;
  topN?: number;
}

export const TopExpensiveToolsChart = ({ tools, topN = 5 }: TopExpensiveToolsChartProps) => {
  const sorted = [...tools].sort((a, b) => (b.monthly_cost ?? 0) - (a.monthly_cost ?? 0));
  const topTools = sorted.slice(0, topN);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800">
        Top Expensive Tools
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={topTools}
            margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            
            <XAxis
              type="number"
              tickFormatter={(value) => `€${value.toLocaleString()}`}
              stroke="#9CA3AF"
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#9CA3AF"
              width={120}
              tick={{ fill: "#6B7280", fontSize: 14 }}
            />

            <Tooltip
              formatter={(value: number) => [`€${value.toLocaleString()}`, "Monthly Cost"]}
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "12px",
                color: "white",
              }}
            />

            <Bar dataKey="monthly_cost" barSize={20} radius={[4, 4, 4, 4]}>
              {topTools.map((_, idx) => (
                <Cell key={idx} fill={`url(#gradient${idx})`} />
              ))}
            </Bar>
            <defs>
              {topTools.map((tool, idx) => (
                <linearGradient key={idx} id={`gradient${idx}`} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#C084FC" />
                </linearGradient>
              ))}
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
