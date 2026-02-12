export const ToolsLoading = () => {
    return (
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="
              h-64
              bg-gray-100
              rounded-2xl
              animate-pulse
            "
          />
        ))}
      </div>
    );
  };
  