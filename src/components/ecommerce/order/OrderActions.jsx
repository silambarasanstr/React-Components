import { Eye, X, Truck } from "lucide-react";

const OrderActions = ({
  order,
  onViewDetails,
  onCancel,
  onTrack,
  showTrack = true,
  showCancel = true,
}) => {
  return (
    <div className="flex items-center gap-2">
      {showTrack && (
        <button
          type="button"
          onClick={() => onTrack?.(order)}
          className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 transition border border-gray-200 rounded-md hover:bg-gray-50"
        >
          <Truck size={16} />
          Track
        </button>
      )}

      <button
        type="button"
        onClick={() => onViewDetails?.(order)}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 transition border border-gray-200 rounded-md hover:bg-gray-50"
      >
        <Eye size={16} />
        View
      </button>

      {showCancel && (
        <button
          type="button"
          onClick={() => onCancel?.(order)}
          className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-red-600 transition border border-red-200 rounded-md hover:bg-red-50"
        >
          <X size={16} />
          Cancel
        </button>
      )}
    </div>
  );
};

export default OrderActions;