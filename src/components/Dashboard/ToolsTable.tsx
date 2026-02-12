import { useState } from "react";
import { useTools } from "../../hooks/get/useDashboardTools";

export const ToolsTable = () => {
  const { tools } = useTools();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcul des pages
  const totalPages = tools ? Math.ceil(tools.length / itemsPerPage) : 0;

  // Items affichés sur la page courante
  const currentItems = tools
    ? tools.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

//   const getStatusStyle = (status?: string) => {
//     if (!status) return "bg-gray-100 text-gray-500";

//     switch (status.toLowerCase()) {
//       case "active":
//         return "from-emerald-400 to-emerald-700";
//       case "expiring":
//         return "bg-amber-50 text-amber-600";
//       case "unused":
//         return "bg-rose-50 text-rose-600";
//       default:
//         return "bg-gray-100 text-gray-500";
//     }
//   };

  const statusStyles: Record<Status, string> = {
    active: "from-emerald-400 to-emerald-700",
    unused: "from-pink-500 to-red-700",
    expiring: "from-orange-400 to-orange-700",
    disabled: "bg-grey-100 text-grey-600",
    archived: "from-purple-400 to-purple-700",
  };

  return (
    <div className="
        m-8
        rounded-2xl
        shadow-sm
        border
        border-gray-100
        bg-white 
        shadow-[0px_10px_30px_-15px_rgba(0,0,0,0.15)] 
        p-8">
      

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Tools
        </h2>
        <span className="text-sm text-gray-400">
          Last 30 days
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-600 border-b border-gray-200">
              <th className="text-left py-4 font-medium w-[35%]">Tool</th>
              <th className="text-left py-4 font-medium w-[25%]">Department</th>
              <th className="text-left py-4 font-medium w-[10%]">Users</th>
              <th className="text-left py-4 font-medium w-[15%]">Monthly Cost</th>
              <th className="text-left py-4 font-medium w-[15%]">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {currentItems?.map((item) => (
              <tr
              key={item.id}
              className="
                border-b border-gray-100 last:border-0 
                hover:bg-gray-50 dark:hover:bg-gray-200/20 
                transition-colors
              "
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
                    className={`text-white inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${statusStyles[item.status]}`}
                  >
                   
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center mt-4 gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 rounded border hover:bg-gray-100 transition"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-1 rounded border hover:bg-gray-100 transition"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
