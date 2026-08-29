import { useState } from "react";

const Tabs = ({
  tabs = [],
  defaultTab,
  activeTab,
  onChange,
  variant = "underline",
  className = "",
}) => {
  const [internalTab, setInternalTab] = useState(
    defaultTab || tabs[0]?.id
  );

  const selectedTab = activeTab ?? internalTab;

  const handleChange = (tabId) => {
    setInternalTab(tabId);
    onChange?.(tabId);
  };

  const variants = {
    underline: {
      container: "border-b border-gray-200",
      button:
        "border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700",
      active:
        "border-blue-600 text-blue-600",
    },

    pills: {
      container: "flex gap-1 rounded-lg bg-gray-100 p-1",
      button:
        "rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900",
      active:
        "bg-white text-gray-900 shadow-sm",
    },

    bordered: {
      container: "border-b border-gray-200",
      button:
        "border border-transparent px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700",
      active:
        "border-gray-200 border-b-white bg-white text-gray-900 -mb-px rounded-t-md",
    },
  };

  const currentVariant =
    variants[variant] || variants.underline;

  const currentContent = tabs.find(
    (tab) => tab.id === selectedTab
  )?.content;

  return (
    <div className={className}>
      {/* Tab buttons */}
      <div className={currentVariant.container}>
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = selectedTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                disabled={tab.disabled}
                onClick={() => handleChange(tab.id)}
                className={`
                  ${currentVariant.button}
                  ${isActive ? currentVariant.active : ""}
                  ${tab.disabled
                    ? "cursor-not-allowed opacity-50"
                    : ""}
                  flex
                  shrink-0
                  items-center
                  gap-2
                  transition
                `}
              >
                {tab.icon && (
                  <span className="shrink-0">
                    {tab.icon}
                  </span>
                )}

                <span>{tab.label}</span>

                {tab.badge !== undefined && (
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content */}
      {currentContent && (
        <div className="pt-4">
          {currentContent}
        </div>
      )}
    </div>
  );
};

export default Tabs;