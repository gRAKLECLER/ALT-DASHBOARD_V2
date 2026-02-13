import { useState } from "react";
import { AddModalTools } from "../components/Tools/AddModalTools";
import { ToolsEmpty } from "../components/Tools/ToolsEmpty";
import { ToolsFilters } from "../components/Tools/ToolsFilter";
import { ToolsGrid } from "../components/Tools/ToolsGrid";
import { ToolsLoading } from "../components/Tools/ToolsLoading";
import { useTools } from "../hooks/get/useDashboardTools";
import { useToolFilters } from "../hooks/get/useDashboardToolsFilter";

export const ToolsPage = () => {
  const { filters, updateFilter } = useToolFilters();
  const { tools, loading, error, refetch } = useTools(filters);

  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (id: number) => console.log("Edit tool", id);
  const handleView = (id: number) => console.log("View tool", id);

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Tools Catalog
          </h1>
          <p className="text-gray-500 mt-2">
            Manage and monitor all SaaS tools across your organization
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          + Add New Tool
        </button>
      </div>
      <ToolsFilters filters={filters} updateFilter={updateFilter} />
      <div>
        {loading && <ToolsLoading />}
        {error && <div className="text-red-500">Error: {error}</div>}

        {!loading && !error && (
          <>
            {!tools || tools.length === 0 ? (
              <ToolsEmpty />
            ) : (
              <ToolsGrid tools={tools} onEdit={handleEdit} onView={handleView} />
            )}
          </>
        )}
      </div>
      {modalOpen && <AddModalTools onClose={() => setModalOpen(false)} onCreated={refetch} />}
    </div>
  );
};
