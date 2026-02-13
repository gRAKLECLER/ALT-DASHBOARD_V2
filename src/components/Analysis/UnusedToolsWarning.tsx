import { ResponsiveContainer, BarChart, Bar } from "recharts";
import { AlertTriangle } from "lucide-react";
import type { Tools } from "../../types/tools";

interface Props {
  tools: Tools[] | undefined;
}

export const UnusedToolsWarnings = ({ tools }: Props) => {


  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="text-orange-500" size={20} />
        <h2 className="text-lg font-semibold text-gray-800">
          Unused Tools Warning
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {tools?.map((tool) => (
          <div
            key={tool.id}
            className="p-4 rounded-xl border border-gray-100 
                       bg-gray-50 
                       transition-all duration-200
                       hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">
                  {tool.name}
                </p>
                <p className="text-sm text-gray-500">
                  €{Number(tool.monthly_cost).toLocaleString()} / month
                </p>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full
                               bg-gradient-to-r from-orange-400 to-red-500
                               text-white">
                Unused
              </span>
            </div>
            <div className="mt-4 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    {
                      value: Number(tool.active_users_count ?? 0),
                    },
                  ]}
                >
                  <Bar
                    dataKey="value"
                    radius={[6, 6, 6, 6]}
                    fill="#F97316"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              {tool.active_users_count ?? 0} active users
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
