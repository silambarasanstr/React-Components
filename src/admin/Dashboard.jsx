import SectionHeader from "../components/admin/common/SectionHeader";

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
