type Status = "active" | "unused" | "expiring" | "disabled" | "archived";

const statusStyles: Record<Status, string> = {
  active: "bg-emerald-100 text-emerald-600",
  unused: "bg-gray-100 text-gray-600",
  expiring: "bg-amber-100 text-amber-600",
  disabled: "bg-red-100 text-red-600",
  archived: "bg-slate-100 text-slate-500",
};

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <span
      className={`
        px-3 py-1 text-sm font-medium rounded-full
        ${statusStyles[status]}
        transition-all duration-200
      `}
    >
      {status}
    </span>
  );
};
