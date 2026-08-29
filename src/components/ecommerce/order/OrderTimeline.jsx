import { Check, Circle } from "lucide-react";

const OrderTimeline = ({ steps = [], currentStep = 0 }) => {
  return (
    <div className="w-full">
      <div className="space-y-6">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step.id || index} className="relative flex gap-4">
              {/* Vertical Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute left-4 top-9 h-full w-0.5 ${
                    index < currentStep ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                {isCompleted ? (
                  <div className="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-full">
                    <Check size={16} />
                  </div>
                ) : (
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      isCurrent
                        ? "border-blue-500 bg-blue-50 text-blue-500"
                        : "border-gray-300 bg-white text-gray-400"
                    }`}
                  >
                    <Circle size={12} fill="currentColor" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <h4
                  className={`text-sm font-semibold ${
                    isCompleted || isCurrent
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </h4>

                {step.description && (
                  <p className="mt-1 text-xs text-gray-500">
                    {step.description}
                  </p>
                )}

                {step.date && (
                  <p className="mt-1 text-xs text-gray-400">{step.date}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTimeline;