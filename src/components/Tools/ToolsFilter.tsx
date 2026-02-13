import type { ToolFilters } from "../../types/tools-filter";
import { InputField } from "../Basic/InpurField";

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
      <div className="flex flex-col w-full lg:w-48">
        <InputField
            label="Department"
            type="select"
            value={filters.department_id}
            required
            onChange={(val) => updateFilter("department_id", val ? Number(val) : undefined)}
            options={[
                { value: "", label: "All" },
                { value: 1, label: "Engineering" },
                { value: 2, label: "Marketing" },
                { value: 3, label: "Design" },
                { value: 4, label: "Sales" },
                { value: 5, label: "HR" },
            ]}
        />
      </div>
      <div className="flex flex-col w-full lg:w-40">
        <InputField
            label="Status"
            type="select"
            value={filters.status ?? ""}
            required
            onChange={(val) => updateFilter("status", val || undefined)}
            options={[
                { value: "", label: "All" },
                { value: "active", label: "Active" },
                { value: "expiring", label: "Expiring" },
                { value: "unused", label: "Unused" },
            ]}
        />
      </div>

      {/* Category */}
      <div className="flex flex-col w-full lg:w-48">
        <InputField
            label="Category"
            type="select"
            value={filters.category ?? ""}
            required
            onChange={(val) => updateFilter("category", val || undefined)}
            options={[
                { value: "", label: "All" },
                { value: "communication", label: "Communication" },
                { value: "development", label: "Development" },
                { value: "design", label: "Design" },
                { value: "marketing", label: "Marketing" },
            ]}
        />
      </div>

      {/* Cost Max */}
      <div className="flex flex-col w-full lg:w-32">
        <InputField
        label="Max Cost"
        type="number"
        placeholder="100"
        value={filters.maxCost}
        required
        onChange={(val) => updateFilter("maxCost", val ? Number(val) : undefined)}
        />
      </div>

    </div>
  );
};

