import type { ToolStatus } from "../../types/tools";

const statusStyles: Record<ToolStatus, string> = {
  active: "from-emerald-400 to-emerald-700",
  unused: "from-pink-500 to-red-700",
  expiring: "from-orange-400 to-orange-700",
  disabled: "bg-grey-100 text-grey-600",
  archived: "from-purple-400 to-purple-700",
};

export const StatusBadge = ({ status }: { status: ToolStatus }) => {
  return (
    <span
      className={`
        px-3 py-1 text-sm font-medium rounded-full
        text-white
        bg-gradient-to-r ${statusStyles[status]}
        transition-all duration-200
      `}
    >
      {status}
    </span>
  );
};
