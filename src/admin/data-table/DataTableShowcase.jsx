




import { useState } from "react";
import { Users, UserCheck, UserX, Wallet } from "lucide-react";

import SectionHeader from "../../components/admin/common/SectionHeader";
import DataTable from "../../components/admin/table/DataTable";
import TablePagination from "../../components/admin/table/TablePagination";
import ColumnVisibility from "../../components/admin/table/ColumnVisibility";
import SearchBox from "../../components/common/SearchBox";
import StatusFilter from "../../components/admin/filters/StatusFilter";
import DateFilter from "../../components/admin/filters/DateFilter";
import FilterBar from "../../components/admin/filters/FilterBar";

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

const employees = [
  {
    _id: "1",
    name: "Silambarasan",
    email: "simba@gmail.com",
    role: "Admin",
    status: "active",
  },
  {
    _id: "2",
    name: "Kumar",
    email: "kumar@gmail.com",
    role: "Employee",
    status: "active",
  },
  {
    _id: "3",
    name: "Raj",
    email: "raj@gmail.com",
    role: "Employee",
    status: "inactive",
  },
];

const DataTableShowcase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((column) => column.key),
  );

  // Only visible columns
  const filteredColumns = columns.filter((column) =>
    visibleColumns.includes(column.key),
  );

  return (
    <div className="space-y-4">
     

      {/* Header */}
      <SectionHeader
        title="Employee List"
        description="Manage your employees."
      />

      <FilterBar>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {/* Search */}
          <div className="w-full sm:w-auto sm:min-w-[240px]">
            <SearchBox placeholder="Search employees..." />
          </div>

          {/* Status Filter */}
          <StatusFilter
            value={status}
            onChange={(value) => {
              setStatus(value);
              setCurrentPage(1);
            }}
            options={[
              { value: "all", label: "All Status" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
          />

          {/* Date Filter */}
          <DateFilter
            fromDate={fromDate}
            toDate={toDate}
            onFromDateChange={(value) => {
              setFromDate(value);
              setCurrentPage(1);
            }}
            onToDateChange={(value) => {
              setToDate(value);
              setCurrentPage(1);
            }}
            onClear={() => {
              setFromDate("");
              setToDate("");
              setCurrentPage(1);
            }}
          />

          {/* Column Visibility */}
          <ColumnVisibility
            columns={columns}
            visibleColumns={visibleColumns}
            onVisibilityChange={setVisibleColumns}
          />
        </div>
      </FilterBar>

      {/* Data Table */}
      <DataTable
        columns={filteredColumns}
        data={employees}
        onEdit={(employee) => {
          console.log("Edit:", employee);
        }}
        onDelete={(employee) => {
          console.log("Delete:", employee);
        }}
      />
      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        totalPages={5}
        totalItems={95}
        itemsPerPage={10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DataTableShowcase;

