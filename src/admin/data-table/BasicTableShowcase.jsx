import { useState } from "react";
import { Pencil, Trash2, Mail, Building2, Tags } from "lucide-react";
import DataTable from "../../components/admin/table/DataTable";
import SectionHeader from "../../components/admin/common/SectionHeader";
import ColumnVisibility from "../../components/admin/common/ColumnVisibility";
import Button from "../../components/common/Button";

export default function BasicTableShowcase() {
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
      key: "department",
      label: "Department",
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
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      department: "HR",
      salary: "$4,500",
      status: "Active",
      location: "Chennai",
      manager: "Priya Raman",
      joinDate: "12 Jan 2022",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      name: "Emma Smith",
      email: "emma@gmail.com",
      department: "IT",
      salary: "$6,000",
      status: "Inactive",
      location: "Bengaluru",
      manager: "Arjun Nair",
      joinDate: "03 Mar 2021",
      phone: "+91 98765 43211",
    },
    {
      id: 3,
      name: "Michael Lee",
      email: "michael@gmail.com",
      department: "Finance",
      salary: "$5,200",
      status: "Active",
      location: "Mumbai",
      manager: "Priya Raman",
      joinDate: "22 Jul 2020",
      phone: "+91 98765 43212",
    },
    {
      id: 4,
      name: "Sophia Brown",
      email: "sophia@gmail.com",
      department: "Marketing",
      salary: "$5,800",
      status: "Inactive",
      location: "Hyderabad",
      manager: "Karan Mehta",
      joinDate: "15 Sep 2023",
      phone: "+91 98765 43213",
    },
    {
      id: 5,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      department: "IT",
      salary: "$5,500",
      status: "Active",
      location: "Chennai",
      manager: "Arjun Nair",
      joinDate: "01 Feb 2022",
      phone: "+91 98765 43214",
    },
    {
      id: 6,
      name: "Divya Menon",
      email: "divya@gmail.com",
      department: "HR",
      salary: "$4,800",
      status: "Active",
      location: "Coimbatore",
      manager: "Priya Raman",
      joinDate: "19 Nov 2021",
      phone: "+91 98765 43215",
    },
    {
      id: 7,
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      department: "Finance",
      salary: "$5,900",
      status: "Inactive",
      location: "Delhi",
      manager: "Karan Mehta",
      joinDate: "07 May 2020",
      phone: "+91 98765 43216",
    },
    {
      id: 8,
      name: "Ananya Iyer",
      email: "ananya@gmail.com",
      department: "Marketing",
      salary: "$5,300",
      status: "Active",
      location: "Pune",
      manager: "Karan Mehta",
      joinDate: "28 Aug 2023",
      phone: "+91 98765 43217",
    },
    {
      id: 9,
      name: "Vikram Singh",
      email: "vikram@gmail.com",
      department: "IT",
      salary: "$6,200",
      status: "Active",
      location: "Bengaluru",
      manager: "Arjun Nair",
      joinDate: "10 Oct 2019",
      phone: "+91 98765 43218",
    },
    {
      id: 10,
      name: "Neha Kapoor",
      email: "neha@gmail.com",
      department: "Sales",
      salary: "$5,000",
      status: "Inactive",
      location: "Salem",
      manager: "Priya Raman",
      joinDate: "04 Apr 2022",
      phone: "+91 98765 43219",
    },
    {
      id: 11,
      name: "Karthik Raja",
      email: "karthik@gmail.com",
      department: "Operations",
      salary: "$4,700",
      status: "Active",
      location: "Madurai",
      manager: "Karan Mehta",
      joinDate: "16 Dec 2021",
      phone: "+91 98765 43220",
    },
    {
      id: 12,
      name: "Priyanka Das",
      email: "priyanka@gmail.com",
      department: "Sales",
      salary: "$5,600",
      status: "Active",
      location: "Kolkata",
      manager: "Arjun Nair",
      joinDate: "30 Jun 2020",
      phone: "+91 98765 43221",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 bg-slate-900">
        <div className="overflow-x-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
          {/* Header */}
          <div className="flex flex-col gap-3 px-4 py-3 border-b md:flex-row md:items-center md:justify-between">
            <SectionHeader
              title="Basic Table 1"
              description="Manage your employees."
            />

            <div className="flex items-center gap-2">
              <Button type="button">+ Add Employee</Button>
            </div>
          </div>

          {/* Table */}
          <div className="max-h-[450px] overflow-auto  rounded-xl">
            <table className="w-full table-auto">
              <thead className="sticky top-0 z-10 border-b bg-gray-50">
                <tr>
                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Employee
                  </th>

                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Department
                  </th>

                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Salary
                  </th>

                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Status
                  </th>

                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Location
                  </th>

                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Manager
                  </th>

                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Join Date
                  </th>

                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Phone
                  </th>

                  <th className="px-4 py-2.5 text-center text-[11px] font-semibold uppercase text-gray-500 whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="transition border-b hover:bg-blue-50/40"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center text-sm font-semibold text-blue-600 bg-blue-100 rounded-full h-9 w-9 shrink-0">
                          {employee.name.charAt(0)}
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-800 whitespace-nowrap">
                            {employee.name}
                          </h4>

                          <div className="mt-0.5 flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap">
                            <Mail size={12} />
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Building2 size={14} className="text-gray-400" />
                        {employee.department}
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">
                      {employee.salary}
                    </td>

                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                          employee.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      {employee.location}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      {employee.manager}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      {employee.joinDate}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      {employee.phone}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        <button
                          type="button"
                          className="rounded-md border border-blue-200 p-1.5 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        >
                          <Pencil size={14} />
                        </button>

                        <button
                          type="button"
                          className="rounded-md border border-red-200 p-1.5 text-red-600 transition hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-900">
        <DataTable
          columns={columns}
          data={employees}
          onEdit={(employee) => {
            console.log("Edit:", employee);
          }}
          onDelete={(employee) => {
            console.log("Delete:", employee);
          }}
        />
      </div>

      <div className="p-4 bg-slate-900">
        <div className="overflow-x-auto bg-white max-h-[450px]">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500">
                  #
                </th>

                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500">
                  Category
                </th>

                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500">
                  Department
                </th>

                <th className="px-4 py-3 text-[11px] font-semibold text-gray-500">
                  Status
                </th>

                <th className="px-4 py-3 text-right text-[11px] font-semibold text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee, index) => (
                <tr
                  key={employee._id}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-xs text-gray-400">
                    {index + 1}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg">
                        <Tags size={15} className="text-gray-600" />
                      </div>

                      <span className="text-xs font-medium text-gray-800">
                        {employee.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-xs text-gray-500">
                    {employee.department || "-"}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-[10px] font-medium ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      className="text-xs font-medium text-gray-500 hover:text-gray-900"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
