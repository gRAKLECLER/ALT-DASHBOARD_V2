// components/tools/ToolCard.tsx

import { Pencil, Eye, Power } from "lucide-react";
import { type Tools } from "../../types/tools";
import { StatusBadge } from "./StatusBadge";

interface ToolCardProps {
  tool: Tools;
  onEdit: (id: number) => void;
  onView: (id: number) => void;
//   onToggleStatus: (tool: Tools) => void;
}

export const ToolCard = ({
  tool,
  onEdit,
  onView,
//   onToggleStatus,
}: ToolCardProps) => {
  const isActive = tool.status === "active";

  const badgeGradientMap: Record<string, string> = {
    green: "from-emerald-400 to-emerald-700",
    violet: "from-purple-400 to-purple-700",
    orange: "from-orange-400 to-orange-700",
    red: "from-pink-500 to-red-700",
  };

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border border-gray-100
        shadow-sm
        p-6
        hover:shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        group
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
        <div className="flex align-center">
        <img className="w-8 h-8 object-contain mr-2" src={tool.icon_url} alt={tool.icon_url} />
          <h3 className="text-lg font-semibold text-gray-900">
            {tool.name}
          </h3>
        </div>

          <p className="text-sm text-gray-500 mt-1">
            {tool.description}
          </p>
        </div>

        <StatusBadge status={tool.status} />
      </div>

      {/* Body */}
      <div className="mt-6 space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-800">
            Category:
          </span>{" "}
          {tool.category}
        </p>

        <p>
          <span className="font-medium text-gray-800">
            Department:
          </span>{" "}
          {tool.owner_department}
        </p>

        <p>
          <span className="font-medium text-gray-800">
            Users:
          </span>{" "}
          {tool.active_users_count}
        </p>

        <p>
          <span className="font-medium text-gray-800">
            Monthly Cost:
          </span>{" "}
          ${tool.monthly_cost}
        </p>

        <p>
          <span className="font-medium text-gray-800">
            Last Update:
          </span>{" "}
          {new Date(tool.updated_at).toLocaleDateString()}
        </p>
      </div>

      {/* Actions */}
      <div
        className="
          mt-6
          flex
          justify-between
          opacity-0
          group-hover:opacity-100
          transition-opacity
        "
      >
        <button
          onClick={() => onEdit(tool.id)}
          className="text-gray-500 hover:text-gray-900 transition"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onView(tool.id)}
          className="text-gray-500 hover:text-gray-900 transition"
        >
          <Eye size={18} />
        </button>

        <button
        //   onClick={() => onToggleStatus(tool)}
          className={`transition ${
            isActive
              ? "text-red-500 hover:text-red-700"
              : "text-emerald-500 hover:text-emerald-700"
          }`}
        >
          <Power size={18} />
        </button>
      </div>
    </div>
  );
};
