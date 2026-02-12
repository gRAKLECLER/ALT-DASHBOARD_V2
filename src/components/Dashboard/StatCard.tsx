import { TrendingUp } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  maxValue?: string;
  percentage?: string;
};

export const StatCard = ({
  title,
  value,
  maxValue,
  percentage,
}: StatCardProps) => {
  return (
    <div className="
      bg-white 
      rounded-2xl 
      shadow-sm 
      border 
      border-gray-100
      p-6 
      relative
    ">
      {/* Icon top right */}
      <div className="absolute top-6 right-6">
        <div className="
          bg-emerald-500 
          text-white 
          p-3 
          rounded-xl
        ">
          <TrendingUp size={18} />
        </div>
      </div>

      {/* Title */}
      <p className="text-gray-500 text-sm font-medium">
        {title}
      </p>

      {/* Value */}
      <div className="mt-6 flex items-end gap-2">
        <span className="text-3xl font-bold text-gray-900">
          {value}
        </span>

        {maxValue && (
          <span className="text-2xl font-semibold text-gray-400">
            /{maxValue}
          </span>
        )}
      </div>

      {/* Percentage Badge */}
      {percentage && (
        <div className="mt-4">
          <span className="
            bg-emerald-100 
            text-emerald-600 
            text-sm 
            font-medium 
            px-3 
            py-1 
            rounded-full
          ">
            {percentage}
          </span>
        </div>
      )}
    </div>
  );
};
