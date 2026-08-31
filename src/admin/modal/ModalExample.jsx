import React, { useState } from "react";
import { Eye, Edit, Trash2, UserPlus } from "lucide-react";

import Button from "../../components/common/Button";
import Modal from "../../components/common/modal/Modal";
import ConfirmModal from "../../components/common/modal/ConfirmModal";
import FormModal from "../../components/common/modal/FormModal";

const ModalExample = () => {
  const [viewModal, setViewModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Employee",
    status: "Active",
  });

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Employee",
      status: "Inactive",
    },
  ];

  // Open View Modal
  const handleView = (user) => {
    setSelectedUser(user);
    setViewModal(true);
  };

  // Open Edit Modal
  const handleEdit = (user) => {
    setSelectedUser(user);

    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    });

    setFormModal(true);
  };

  // Open Delete Modal
  const handleDelete = (user) => {
    setSelectedUser(user);
    setDeleteModal(true);
  };

  // Add User
  const handleAdd = () => {
    setSelectedUser(null);

    setForm({
      name: "",
      email: "",
      role: "Employee",
      status: "Active",
    });

    setFormModal(true);
  };

  // Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log(selectedUser ? "Updated User:" : "Created User:", form);

      setLoading(false);
      setFormModal(false);
    }, 1000);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    setLoading(true);

    setTimeout(() => {
      console.log("Deleted User:", selectedUser);

      setLoading(false);
      setDeleteModal(false);
      setSelectedUser(null);
    }, 1000);
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            Modal Example
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Real-world example of reusable admin modals.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={handleAdd}
          className="inline-flex items-center gap-2"
        >
          <UserPlus size={16} />
          Add User
        </Button>
      </div>

      {/* User Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-800">Users</h2>

          <p className="mt-1 text-xs text-slate-500">
            Manage users using reusable modal components.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="border-b border-slate-200 bg-white">
              <tr>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  User
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Role
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="transition hover:bg-slate-50">
                  {/* User */}
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {user.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {user.email}
                      </p>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-600">{user.role}</span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`
                        inline-flex items-center rounded-full
                        px-2.5 py-1
                        text-xs font-medium
                        ${
                          user.status === "Active"
                            ? "bg-green-50 text-green-700"
                            : "bg-slate-100 text-slate-600"
                        }
                      `}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-1">
                      {/* View */}
                      <button
                        type="button"
                        onClick={() => handleView(user)}
                        title="View"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                      >
                        <Eye size={16} />
                      </button>

                      {/* Edit */}
                      <button
                        type="button"
                        onClick={() => handleEdit(user)}
                        title="Edit"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Edit size={16} />
                      </button>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => handleDelete(user)}
                        title="Delete"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* =====================================================
          VIEW MODAL
      ====================================================== */}
      <Modal
        isOpen={viewModal}
        onClose={() => setViewModal(false)}
        title="User Details"
        size="sm"
      >
        {selectedUser && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                {selectedUser.name.charAt(0)}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {selectedUser.name}
                </h3>

                <p className="text-xs text-slate-500">{selectedUser.email}</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs text-slate-500">Role</span>

                <span className="text-sm font-medium text-slate-800">
                  {selectedUser.role}
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs text-slate-500">Status</span>

                <span className="text-sm font-medium text-slate-800">
                  {selectedUser.status}
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs text-slate-500">User ID</span>

                <span className="text-sm font-medium text-slate-800">
                  #{selectedUser.id}
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setViewModal(false)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* =====================================================
          FORM MODAL
      ====================================================== */}
      <FormModal
        isOpen={formModal}
        onClose={() => setFormModal(false)}
        onSubmit={handleSubmit}
        title={selectedUser ? "Edit User" : "Add New User"}
        description={
          selectedUser
            ? "Update the user's information below."
            : "Enter the user's information below."
        }
        submitText={selectedUser ? "Update User" : "Create User"}
        cancelText="Cancel"
        loading={loading}
        size="md"
      >
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
              required
              className="
                block w-full rounded-lg
                border border-slate-300
                bg-white px-3 py-2
                text-sm text-slate-900
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="
                block w-full rounded-lg
                border border-slate-300
                bg-white px-3 py-2
                text-sm text-slate-900
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
              "
            />
          </div>

          {/* Role */}
          <div>
            <label
              htmlFor="role"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Role
            </label>

            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="
                block w-full rounded-lg
                border border-slate-300
                bg-white px-3 py-2
                text-sm text-slate-900
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
              "
            >
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Status
            </label>

            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              className="
                block w-full rounded-lg
                border border-slate-300
                bg-white px-3 py-2
                text-sm text-slate-900
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
              "
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </FormModal>

      {/* =====================================================
          CONFIRM MODAL
      ====================================================== */}
      <ConfirmModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title="Delete User?"
        message={
          selectedUser
            ? `Are you sure you want to delete ${selectedUser.name}? This action cannot be undone.`
            : "Are you sure you want to delete this user?"
        }
        confirmText="Delete"
        cancelText="Cancel"
        loading={loading}
        variant="danger"
      />
    </div>
  );
};

export default ModalExample;
