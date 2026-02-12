import { useTools } from "../../hooks/get/useDashboardTools";

export const ToolsTable = () => {
  const { tools } = useTools();

  const getStatusStyle = (status?: string) => {
    if (!status) return "bg-gray-100 text-gray-500";

    switch (status.toLowerCase()) {
      case "active":
        return "bg-emerald-50 text-emerald-600";
      case "expiring":
        return "bg-amber-50 text-amber-600";
      case "unused":
        return "bg-rose-50 text-rose-600";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_10px_30px_-15px_rgba(0,0,0,0.15)] p-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Tools
        </h2>
        <span className="text-sm text-gray-400">
          Last 30 days
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          
          {/* Head */}
          <thead>
            <tr className="text-gray-400 border-b border-gray-200">
              <th className="text-left py-4 font-medium w-[35%]">Tool</th>
              <th className="text-left py-4 font-medium w-[25%]">Department</th>
              <th className="text-left py-4 font-medium w-[10%]">Users</th>
              <th className="text-left py-4 font-medium w-[15%]">Monthly Cost</th>
              <th className="text-left py-4 font-medium w-[15%]">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {tools?.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60 transition-colors"
              >
                {/* TOOL */}
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                      <img
                        src={item.icon_url}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                  </div>
                </td>

                {/* DEPARTMENT */}
                <td className="py-5 text-gray-600">
                  {item.owner_department}
                </td>

                {/* USERS */}
                <td className="py-5 text-gray-600">
                  {item.active_users_count ?? 0}
                </td>

                {/* COST */}
                <td className="py-5 text-gray-600">
                  €{item.monthly_cost ?? 0}
                </td>

                {/* STATUS */}
                <td className="py-5">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
