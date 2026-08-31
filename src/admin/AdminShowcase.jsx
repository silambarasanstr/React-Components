import React, { useState } from "react";
import { Users, UserCheck, UserX, Wallet } from "lucide-react";

import StatCard from "../components/admin/dashboard/StatCard";
import SectionHeader from "../components/admin/common/SectionHeader";
import SearchBox from "../components/common/SearchBox";
import StatusFilter from "../components/admin/filters/StatusFilter";
import DateFilter from "../components/admin/filters/DateFilter";
import ColumnVisibility from "../components/admin/table/ColumnVisibility";
import FilterBar from "../components/admin/filters/FilterBar";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "status",
    label: "Status",
    render: (row) => (
      <span
        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
          row.status === "active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

const AdminShowcase = () => {
  const [status, setStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((column) => column.key),
  );

  const stats = [
    {
      title: "Total Employees",
      value: "120",
      icon: Users,
      trend: "+12%",
      description: "from last month",
      trendType: "up",
    },
    {
      title: "Active Employees",
      value: "108",
      icon: UserCheck,
      trend: "+8%",
      description: "from last month",
      trendType: "up",
    },
    {
      title: "Inactive Employees",
      value: "12",
      icon: UserX,
      trend: "-3%",
      description: "from last month",
      trendType: "down",
    },
    {
      title: "Total Payroll",
      value: "₹2.4L",
      icon: Wallet,
      trend: "+6%",
      description: "from last month",
      trendType: "up",
    },
  ];

  return (
    <div className="space-y-8">
      {/* StatCard */}
      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">StatCard</h2>
          <p className="text-xs ">
            Reusable cards for displaying dashboard statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </section>

      {/* SectionHeader */}
      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">SectionHeader</h2>
          <p className="text-xs ">Reusable header for admin page sections.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <SectionHeader
            title="Employee List"
            description="Manage your employees."
          />
        </div>
      </section>

      {/* SearchBox */}
      <section className="space-y-4 bg-slate-900 p-4">
        <div className="text-white">
          <h2 className="text-sm font-semibold ">SearchBox</h2>
          <p className="text-xs ">Reusable search input for filtering data.</p>
        </div>

        <div className="rounded-xl border border-gray-200  p-5">
          <SearchBox placeholder="Search employees..." />
        </div>
      </section>

      {/* StatusFilter */}
      <section className="space-y-4 bg-slate-900 p-4">
        <div className="text-white">
          <h2 className="text-sm font-semibold ">StatusFilter</h2>
          <p className="text-xs ">
            Reusable filter for filtering records by status.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-5">
          <StatusFilter
            value={status}
            onChange={setStatus}
            options={[
              { value: "all", label: "All Status" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
          />
        </div>
      </section>

      {/* DateFilter */}
      <section className="space-y-4 bg-slate-900 p-4">
        <div className="text-white">
          <h2 className="text-sm font-semibold ">DateFilter</h2>
          <p className="text-xs ">Reusable date range filter for admin data.</p>
        </div>

        <div className="rounded-xl border border-gray-200  p-5">
          <DateFilter
            fromDate={fromDate}
            toDate={toDate}
            onFromDateChange={setFromDate}
            onToDateChange={setToDate}
            onClear={() => {
              setFromDate("");
              setToDate("");
            }}
          />
        </div>
      </section>

      {/* ColumnVisibility */}
      <section className="space-y-4 bg-slate-900 p-4">
        <div className="text-white">
          <h2 className="text-sm font-semibold ">ColumnVisibility</h2>
          <p className="text-xs">
            Reusable control for showing or hiding table columns.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200  p-5">
          <ColumnVisibility
            columns={columns}
            visibleColumns={visibleColumns}
            onVisibilityChange={setVisibleColumns}
          />
        </div>
      </section>

      {/* FilterBar */}
      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">FilterBar</h2>
          <p className="text-xs ">Reusable FilterBar for admin page sections.</p>
        </div>

        <div className="rounded-xl border border-gray-200 p-5">
          <FilterBar>ddfd</FilterBar>
        </div>
      </section>
    </div>
  );
};

export default AdminShowcase;
