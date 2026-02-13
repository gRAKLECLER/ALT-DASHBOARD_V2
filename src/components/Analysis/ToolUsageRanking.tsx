import { useState, useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import type { Tools } from "../../types/tools";

interface Props {
  tools: Tools[] | null;
}

export const ToolUsageRanking = ({ tools }: Props) => {
  const [order, setOrder] = useState<"most" | "least">("most");

  const ranking = useMemo(() => {
    const mapped = tools?.map((tool) => ({
      id: tool.id,
      name: tool.name,
      usageCount: Number(tool.active_users_count ?? 0),
      trend: Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 100)
      ),
    }));

    return mapped?.sort((a, b) =>
      order === "most"
        ? b.usageCount - a.usageCount
        : a.usageCount - b.usageCount
    );
  }, [tools, order]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          {order === "most" ? "Most Used Tools" : "Least Used Tools"}
        </h2>

        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setOrder("most")}
            className={`px-3 py-1 text-sm rounded-md transition ${
              order === "most"
                ? "bg-white shadow text-black"
                : "text-gray-500"
            }`}
          >
            Most
          </button>

          <button
            onClick={() => setOrder("least")}
            className={`px-3 py-1 text-sm rounded-md transition ${
              order === "least"
                ? "bg-white shadow text-black"
                : "text-gray-500"
            }`}
          >
            Least
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {ranking?.slice(0, 5).map((tool, index) => (
          <div
            key={tool.id}
            className="flex items-center justify-between p-4 rounded-xl 
                       bg-gray-50
                       transition-all duration-200 
                       hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 flex-1">
              <span className="text-gray-400 font-bold w-6">
                #{index + 1}
              </span>

              <div>
                <p className="font-medium text-gray-800">
                  {tool.name}
                </p>

                <p className="text-xs text-gray-400">
                  {tool.usageCount} users
                </p>
              </div>
            </div>
            <div className="w-28 h-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={tool.trend.map((v, i) => ({
                    index: i,
                    value: v,
                  }))}
                >
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
