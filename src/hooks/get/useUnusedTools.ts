import { useMemo } from "react";
import { useTools } from "../get/useDashboardTools";
import type { Tools } from "../../types/tools";

export const useUnusedTools = () => {
  const { tools = [], loading, error } = useTools();

  const unusedTools = useMemo(() => {
    return tools?.filter(
      (tool: Tools) => tool.status === "unused"
    );
  }, [tools]);

  return { unusedTools, loading, error };
};
