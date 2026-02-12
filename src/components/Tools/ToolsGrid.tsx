import type { Tools } from "../../types/tools";
import { ToolCard } from "./ToolsCard";

interface ToolsGridProps {
  tools: Tools[];
  onEdit: (id: number) => void;
  onView: (id: number) => void;
}

export const ToolsGrid = ({
  tools,
  onEdit,
  onView,
}: ToolsGridProps) => {
  return (
    <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-6
  ">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </div>
  );
};
