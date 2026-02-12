import type { ToolFilters } from "../../types/tools-filter";

interface ToolsFiltersProps {
  filters: ToolFilters;
  updateFilter: <K extends keyof ToolFilters>(
    key: K,
    value: ToolFilters[K]
  ) => void;
}

export const ToolsFilters = ({
  filters,
  updateFilter,
}: ToolsFiltersProps) => {
  return (
    <div className="
      flex
      flex-col
      gap-4
      lg:flex-row
      lg:flex-wrap
      lg:items-end
         bg-white
      p-6
      rounded-2xl
      shadow-sm
      border
      border-gray-100
    ">

      {/* Department */}
      <div className="flex flex-col w-full lg:w-48">
        <label className="text-sm text-gray-500">
          Department
        </label>
        <select
          className="mt-1 border rounded-xl p-2"
          value={filters.department_id ?? ""}
          onChange={(e) =>
            updateFilter(
              "department_id",
              e.target.value
                ? Number(e.target.value)
                : undefined
            )
          }
        >
          <option value="">All</option>
          <option value="1">Engineering</option>
          <option value="2">Marketing</option>
          <option value="3">Design</option>
          <option value="4">Sales</option>
          <option value="5">HR</option>
        </select>
      </div>

      {/* Status */}
      <div className="flex flex-col w-full lg:w-40">
        <label className="text-sm text-gray-500">
          Status
        </label>
        <select
          className="mt-1 border rounded-xl p-2"
          value={filters.status ?? ""}
          onChange={(e) =>
            updateFilter(
              "status",
              e.target.value || undefined
            )
          }
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="expiring">Expiring</option>
          <option value="unused">Unused</option>
        </select>
      </div>

      {/* Category */}
      <div className="flex flex-col w-full lg:w-48">
        <label className="text-sm text-gray-500">
          Category
        </label>
        <select
          className="mt-1 border rounded-xl p-2"
          value={filters.category ?? ""}
          onChange={(e) =>
            updateFilter(
              "category",
              e.target.value || undefined
            )
          }
        >
          <option value="">All</option>
          <option value="communication">Communication</option>
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>

      {/* Cost Max */}
      <div className="flex flex-col w-full lg:w-32">
        <label className="text-sm text-gray-500">
          Max Cost
        </label>
        <input
          type="number"
          placeholder="100"
          className="mt-1 border rounded-xl p-2"
          onChange={(e) =>
            updateFilter(
              "maxCost",
              e.target.value
                ? Number(e.target.value)
                : undefined
            )
          }
        />
      </div>

    </div>
  );
};

