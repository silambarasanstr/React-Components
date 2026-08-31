import React, { useState } from "react";
import Button from "../../components/common/Button";
import Modal from "../../components/common/modal/Modal";
import ConfirmModal from "../../components/common/modal/ConfirmModal";
import FormModal from "../../components/common/modal/FormModal";

const ModalComponents = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [smallModal, setSmallModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFormLoading(true);

    // Demo API simulation
    setTimeout(() => {
      console.log("Form submitted:", form);

      setFormLoading(false);
      setFormModal(false);

      setForm({
        name: "",
        email: "",
      });
    }, 1000);
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          Modal Components
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Reusable modal components for admin applications.
        </p>
      </div>

      {/* =====================================================
          BASIC MODAL
      ====================================================== */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-800">Basic Modal</h2>

          <p className="mt-1 text-xs text-slate-500">
            Simple modal for displaying information.
          </p>
        </div>

        <div className="p-5">
          <Button variant="primary" onClick={() => setBasicModal(true)}>
            Open Basic Modal
          </Button>
        </div>
      </section>

      <Modal
        isOpen={basicModal}
        onClose={() => setBasicModal(false)}
        title="Basic Modal"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-sm leading-6 text-slate-600">
            This is a reusable basic modal component. You can use this modal for
            information, details, forms, and other content.
          </p>

          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setBasicModal(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>

      {/* =====================================================
          SMALL MODAL
      ====================================================== */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-800">Small Modal</h2>

          <p className="mt-1 text-xs text-slate-500">
            A smaller modal for concise information display.
          </p>
        </div>

        <div className="p-5">
          <Button variant="primary" onClick={() => setSmallModal(true)}>
            Open Small Modal
          </Button>
        </div>
      </section>

      <Modal
        isOpen={smallModal}
        onClose={() => setSmallModal(false)}
        title="Quick Action"
        size="sm"
      >
        <div className="space-y-4">
          <p className="text-sm leading-6 text-slate-600">
            This is a small modal designed for quick actions and short messages.
          </p>

          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setSmallModal(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>

      {/* =====================================================
          LARGE MODAL
      ====================================================== */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-800">Large Modal</h2>

          <p className="mt-1 text-xs text-slate-500">
            A larger modal for detailed information display.
          </p>
        </div>

        <div className="p-5">
          <Button variant="primary" onClick={() => setLargeModal(true)}>
            Open Large Modal
          </Button>
        </div>
      </section>

      <Modal
        isOpen={largeModal}
        onClose={() => setLargeModal(false)}
        title="Large Modal"
        size="lg"
      >
        <div className="space-y-5">
          <p className="text-sm leading-6 text-slate-600">
            This is a large modal. It can be used for detailed information,
            forms, tables, or multi-section content.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Status</p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                Active
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Type</p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                Administrator
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setLargeModal(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>

      {/* =====================================================
          CONFIRM MODAL
      ====================================================== */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-800">
            Confirmation Modal
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Confirmation dialog for destructive or important actions.
          </p>
        </div>

        <div className="p-5">
          <Button variant="danger" onClick={() => setConfirmModal(true)}>
            Delete Record
          </Button>
        </div>
      </section>

      <ConfirmModal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        onConfirm={() => {
          console.log("Record deleted");
          setConfirmModal(false);
        }}
        title="Delete Record?"
        message="Are you sure you want to delete this record? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />

      {/* =====================================================
          FORM MODAL
      ====================================================== */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-800">Form Modal</h2>

          <p className="mt-1 text-xs text-slate-500">
            Form dialog for adding or editing records.
          </p>
        </div>

        <div className="p-5">
          <Button variant="primary" onClick={() => setFormModal(true)}>
            Open Form Modal
          </Button>
        </div>
      </section>

      <FormModal
        isOpen={formModal}
        onClose={() => setFormModal(false)}
        onSubmit={handleFormSubmit}
        title="Add New Record"
        description="Please fill in the details below to add a new record."
        submitText="Save Record"
        cancelText="Cancel"
        loading={formLoading}
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
              onChange={handleFormChange}
              placeholder="Enter name"
              className="
                block w-full rounded-lg
                border border-slate-300
                bg-white
                px-3 py-2
                text-sm text-slate-900
                placeholder:text-slate-400
                outline-none
                transition
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
              onChange={handleFormChange}
              placeholder="Enter email"
              className="
                block w-full rounded-lg
                border border-slate-300
                bg-white
                px-3 py-2
                text-sm text-slate-900
                placeholder:text-slate-400
                outline-none
                transition
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
              "
            />
          </div>
        </div>
      </FormModal>
    </div>
  );
};

export default ModalComponents;
