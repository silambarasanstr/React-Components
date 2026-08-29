import { useState } from "react";
import { toast } from "sonner";
import {
  Edit,
  Trash2,
  Eye,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import IconButton from "../components/common/IconButton";
import Card from "../components/common/Card";
import Drawer from "../components/common/Drawer";
import Dropdown from "../components/common/Dropdown";
import Tooltip from "../components/common/Tooltip";
import Alert from "../components/common/Alert";
import Spinner from "../components/common/Spinner";
import SearchBox from "../components/common/SearchBox";
import Button from "../components/common/Button";
import LoadingState from "../components/common/LoadingState";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";

import ConfirmModal from "../components/common/modal/ConfirmModal";
import AddEmployeeModal from "../components/common/modal/AddEmployeeModal";

const ComponentSection = ({ title, description, children }) => {
  return (
    <section className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>

        {description && (
          <p className="mt-1 text-xs text-gray-500">{description}</p>
        )}
      </div>

      {children}
    </section>
  );
};

const ComponentShowcase = () => {
  const [search, setSearch] = useState("");
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Add Employee Modal
  // -----------------------------
  const handleOpenAddEmployee = () => {
    setIsAddEmployeeModalOpen(true);
  };

  const handleCloseAddEmployee = () => {
    if (!loading) {
      setIsAddEmployeeModalOpen(false);
    }
  };

  // -----------------------------
  // Toast
  // -----------------------------
  const handleToast = () => {
    toast.success("Employee added successfully!");
  };

  // -----------------------------
  // Delete Modal
  // -----------------------------
  const handleOpenDelete = () => {
    setIsDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    if (!loading) {
      setIsDeleteOpen(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);

      // Fake API request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Employee deleted successfully!");

      setIsDeleteOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete employee.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 sm:p-6">
      <div className="mx-auto space-y-6 max-w-7xl">

        {/* ========================================
            Page Header
        ======================================== */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Component Showcase
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Learn and test reusable common components used throughout the
            application.
          </p>
        </div>

        {/* ========================================
            Basic Components
        ======================================== */}
        <div>
          <h2 className="mb-3 text-base font-semibold text-gray-900">
            Basic Components
          </h2>

          <div className="space-y-4">

            {/* Button */}
            <ComponentSection
              title="Button"
              description="Reusable button with different variants and sizes."
            >
              <div className="flex flex-wrap gap-3">
                <Button type="button">
                  Default
                </Button>

                <Button
                  type="button"
                  variant="primary"
                >
                  Primary
                </Button>

                <Button
                  type="button"
                  variant="danger"
                >
                  Delete
                </Button>

                <Button
                  type="button"
                  size="sm"
                >
                  Small
                </Button>
              </div>
            </ComponentSection>

            {/* Icon Button */}
            <ComponentSection
              title="Icon Button"
              description="Button designed for icon-only actions."
            >
              <div className="flex items-center gap-2">
                <IconButton
                  icon={Edit}
                  title="Edit"
                  variant="primary"
                />

                <IconButton
                  icon={Trash2}
                  title="Delete"
                  variant="danger"
                />

                <IconButton
                  icon={Eye}
                  title="View"
                  variant="default"
                  size="sm"
                />
              </div>
            </ComponentSection>

            {/* Spinner */}
            <ComponentSection
              title="Spinner"
              description="Displays a loading indicator while an operation is running."
            >
              <Spinner />
            </ComponentSection>

          </div>
        </div>

        {/* ========================================
            Feedback Components
        ======================================== */}
        <div>
          <h2 className="mb-3 text-base font-semibold text-gray-900">
            Feedback Components
          </h2>

          <div className="space-y-4">

            {/* Alert */}
            <ComponentSection
              title="Alert"
              description="Shows success, error, warning and information messages."
            >
              <div className="space-y-3">
                <Alert
                  variant="success"
                  title="Success"
                  message="Employee has been added successfully."
                />

                <Alert
                  variant="error"
                  title="Something went wrong"
                  message="Unable to fetch employee data."
                />

                <Alert
                  variant="warning"
                  title="Warning"
                  message="Your session will expire soon."
                />

                <Alert
                  variant="info"
                  title="Information"
                  message="New updates are available."
                />
              </div>
            </ComponentSection>

            {/* Toast */}
            <ComponentSection
              title="Toast"
              description="Displays temporary notification messages."
            >
              <Button
                type="button"
                onClick={handleToast}
              >
                Show Toast
              </Button>
            </ComponentSection>

            {/* Loading State */}
            <ComponentSection
              title="Loading State"
              description="Used while fetching or processing data."
            >
              <LoadingState message="Loading employees..." />
            </ComponentSection>

            {/* Error State */}
            <ComponentSection
              title="Error State"
              description="Displays an error when data loading fails."
            >
              <ErrorState message="Failed to load employees." />
            </ComponentSection>

            {/* Empty State */}
            <ComponentSection
              title="Empty State"
              description="Used when there is no data to display."
            >
              <EmptyState
                title="No employees found"
                message="There are no employees to display."
              />
            </ComponentSection>

          </div>
        </div>

        {/* ========================================
            Overlay Components
        ======================================== */}
        <div>
          <h2 className="mb-3 text-base font-semibold text-gray-900">
            Overlay Components
          </h2>

          <div className="space-y-4">

            {/* Tooltip */}
            <ComponentSection
              title="Tooltip"
              description="Displays additional information when hovering an element."
            >
              <Tooltip content="Edit employee">
                <Button type="button">
                  Edit
                </Button>
              </Tooltip>
            </ComponentSection>

            {/* Dropdown */}
            <ComponentSection
              title="Dropdown"
              description="Displays a list of actions or options."
            >
              <Dropdown
                label="Actions"
                items={[
                  {
                    id: "profile",
                    label: "Profile",
                    icon: User,
                    onClick: () => console.log("Profile"),
                  },
                  {
                    id: "settings",
                    label: "Settings",
                    icon: Settings,
                    onClick: () => console.log("Settings"),
                  },
                  {
                    id: "logout",
                    label: "Logout",
                    icon: LogOut,
                    danger: true,
                    onClick: () => console.log("Logout"),
                  },
                ]}
              />
            </ComponentSection>

            {/* Drawer */}
            <ComponentSection
              title="Drawer"
              description="Displays additional content from the side of the screen."
            >
              <Button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
              >
                Open Drawer
              </Button>

              <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Employee Details"
              >
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Employee information goes here.
                  </p>

                  <p className="text-sm text-gray-600">
                    This area can contain forms, details or other components.
                  </p>
                </div>
              </Drawer>
            </ComponentSection>

          </div>
        </div>

        {/* ========================================
            Content Components
        ======================================== */}
        <div>
          <h2 className="mb-3 text-base font-semibold text-gray-900">
            Content Components
          </h2>

          <div className="space-y-4">

            {/* Card */}
            <ComponentSection
              title="Card"
              description="Reusable container for grouping related content."
            >
              <div className="space-y-4">

                <Card
                  title="Recent Orders"
                  description="Latest orders from your customers"
                >
                  <p className="text-sm text-gray-600">
                    Order information goes here.
                  </p>
                </Card>

                <Card
                  header={
                    <div className="flex items-center justify-between w-full gap-4">
                      <h3 className="text-sm font-semibold text-gray-900">
                        Products
                      </h3>

                      <Button
                        type="button"
                        size="sm"
                      >
                        Add Product
                      </Button>
                    </div>
                  }
                >
                  <p className="text-sm text-gray-600">
                    Product information goes here.
                  </p>
                </Card>

              </div>
            </ComponentSection>

            {/* Search Box */}
            <ComponentSection
              title="Search Box"
              description="Reusable search input for filtering data."
            >
              <SearchBox
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search employees..."
                className="w-full max-w-md"
              />

              {search && (
                <p className="mt-2 text-xs text-gray-500">
                  Searching for:{" "}
                  <span className="font-medium text-gray-700">
                    {search}
                  </span>
                </p>
              )}
            </ComponentSection>

          </div>
        </div>

        {/* ========================================
            Modal Components
        ======================================== */}
        <div>
          <h2 className="mb-3 text-base font-semibold text-gray-900">
            Modal Components
          </h2>

          <div className="space-y-4">

            {/* Add Employee Modal */}
            <ComponentSection
              title="Add Employee Modal"
              description="Example of a reusable form modal."
            >
              <Button
                type="button"
                onClick={handleOpenAddEmployee}
              >
                Add Employee
              </Button>

              <AddEmployeeModal
                isOpen={isAddEmployeeModalOpen}
                onClose={handleCloseAddEmployee}
              />
            </ComponentSection>

            {/* Confirm Modal */}
            <ComponentSection
              title="Confirm Modal"
              description="Used when the user must confirm a destructive action."
            >
              <Button
                type="button"
                variant="danger"
                onClick={handleOpenDelete}
              >
                Delete Employee
              </Button>

              <ConfirmModal
                isOpen={isDeleteOpen}
                onClose={handleCloseDelete}
                onConfirm={handleDelete}
                title="Delete Employee?"
                message="Are you sure you want to delete this employee? This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
                loading={loading}
                variant="danger"
              />
            </ComponentSection>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ComponentShowcase;
