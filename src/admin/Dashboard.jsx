import SectionHeader from "../components/admin/common/SectionHeader";
import ChartCard from "../components/admin/dashboard/ChartCard";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      {/* Header */}
      <SectionHeader
        title="Employee List"
        description="Manage your employees."
      />
    </div>
  );
};

export default Dashboard;
