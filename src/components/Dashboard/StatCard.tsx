type StatCardProps = {
  title: string;
  value: string | number;
  maxValue?: string;
  percentage?: string;
  variant?: "green" | "violet" | "orange" | "red";
  icon?: React.ReactNode;
  isCurrency?: boolean;
};

export const StatCard = ({
  title,
  value,
  maxValue,
  percentage,
  variant = "green",
  icon,
  isCurrency
}: StatCardProps) => {
  const iconGradientMap: Record<string, string> = {
    green: "from-emerald-400 to-emerald-700",
    violet: "from-purple-400 to-purple-700",
    orange: "from-orange-400 to-orange-700",
    red: "from-pink-500 to-red-700",
  };

  const badgeGradientMap: Record<string, string> = {
    green: "from-emerald-400 to-emerald-700",
    violet: "from-purple-400 to-purple-700",
    orange: "from-orange-400 to-orange-700",
    red: "from-pink-500 to-red-700",
  };

const formatCurrency = (num?: string | number) => {
  if (!num) return "";
  const n = typeof num === "string" ? parseFloat(num) : num;
  return `€${n.toLocaleString()}`;
};

const formatMaxValue = (num?: string | number) => {
  if (!num) return "";
  const n = typeof num === "string" ? parseInt(num) : num;
  if (n >= 1_000_000) return `€${Math.floor(n / 1_000_000)}M`;
  if (n >= 1_000) return `€${Math.floor(n / 1_000)}K`;
  return `€${n}`;
};

  return (
    <div
    className={`
      bg-white
      rounded-2xl
      shadow-sm
      border border-gray-100
      p-6
      relative
      transform
      transition-all
      duration-200
      hover:-translate-y-1
      hover:shadow-lg
    `}
  >
       {/* Icon */}
       <div className="absolute top-6 right-6">
        <div
          className={`
            bg-gradient-to-br ${iconGradientMap[variant]}
            text-white
            p-3
            rounded-xl
          `}
        >
          {icon}
        </div>
      </div>

      {/* Title */}
      <p className="text-gray-500 text-sm font-medium">
        {title}
      </p>

      {/* Value */}
      <div className="mt-6 flex items-end gap-2">
        <span className="text-3xl font-bold text-gray-900">
          {isCurrency ? formatCurrency(value) : value}
        </span>

        {maxValue && (
          <span className="text-2xl font-semibold text-gray-400">
            /{isCurrency ? formatMaxValue(maxValue) : maxValue}
          </span>
        )}
      </div>

      {/* Percentage Badge */}
      {percentage && (
        <div className="mt-4">
          <span className={`
            text-white 
            text-sm 
            font-medium 
            px-3 py-1 
            rounded-full
            bg-gradient-to-r ${badgeGradientMap[variant]}
          `}>
            {percentage}
          </span>
        </div>
      )}
    </div>
  );
};
