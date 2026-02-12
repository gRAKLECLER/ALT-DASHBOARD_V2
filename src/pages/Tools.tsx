// pages/ToolsPage.tsx

import { useTools } from "../hooks/get/useDashboardTools";
import { useToolFilters } from "../hooks/get/useDashboardToolsFilter";
import { ToolsGrid } from "../components/Tools/ToolsGrid";
import { ToolsLoading } from "../components/Tools/ToolsLoading";
import { ToolsEmpty } from "../components/Tools/ToolsEmpty";
import { ToolsFilters } from "../components/Tools/ToolsFilter";

export const ToolsPage = () => {
  const { filters, updateFilter } = useToolFilters();
  const { tools, loading, error } = useTools(filters);

  const handleEdit = (id: number): void => {
    console.log("Edit tool", id);
  };

  const handleView = (id: number): void => {
    console.log("View tool", id);
  };

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

        <ToolsFilters
          filters={filters}
          updateFilter={updateFilter}
        />
      <div>
        {loading && <ToolsLoading />}

        {error && (
          <div className="text-red-500">
            Error: {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {!tools || tools.length === 0 ? (
              <ToolsEmpty />
            ) : (
              <ToolsGrid
                tools={tools}
                onEdit={handleEdit}
                onView={handleView}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
