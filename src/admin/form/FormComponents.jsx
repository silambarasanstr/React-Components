import React, { useState } from "react";
import Input from "../../components/common/form/Input";
import Select from "../../components/common/form/Select";
import RadioGroup from "../../components/common/form/RadioGroup";
import Switch from "../../components/common/form/Switch";
import DatePicker from "../../components/common/form/DatePicker";
import FileUpload from "../../components/common/form/FileUpload";
import Textarea from "../../components/common/form/Textarea";
import Button from "../../components/common/Button";

const FormComponents = () => {
  return (
    <div className="space-y-8">
      {/* Basic Inputs */}

      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">Basic Inputs</h2>
          <p className="text-xs ">
            Reusable cards for displaying dashboard statistics.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Input label="Name" placeholder="Enter your name..." required />
          <Input label="Email" placeholder="Enter your email... " required />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password... "
            required
          />
          <Input
            label="Age"
            type="number"
            placeholder="Enter your age... "
            required
          />

          <Button>Submit</Button>
        </div>
      </section>

      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">Select & Choice</h2>
          <p className="text-xs ">
            Reusable cards for displaying dashboard statistics.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Select label="Country" options={["USA", "Canada", "Mexico"]} />
          <RadioGroup
            label="Gender"

            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
          <Switch
            label="Email Notifications"
            name="emailNotifications"

            description="Receive email notifications"
          />
        </div>
      </section>

      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">Date & File</h2>
          <p className="text-xs ">
            Reusable cards for displaying dashboard statistics.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <DatePicker label="Birth Date" disabled name="dateOfBirth" />
          <FileUpload
            label="Profile Image"
            name="profileImage"
            // value={form.profileImage}
            // onChange={handleFileChange}
            accept="image/png,image/jpeg"
            description="PNG or JPG up to 5MB"
          />
        </div>
      </section>

      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">Text</h2>
          <p className="text-xs ">
            Reusable cards for displaying dashboard statistics.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Textarea
            label={"Message"}
            placeholder="Enter your message..."
            rows={4}
          />
        </div>
      </section>

      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">Validation</h2>
          <p className="text-xs ">
            Reusable cards for displaying dashboard statistics.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <Input
            label="Name"
            placeholder="Enter your name..."
            required
            error={<p className="text-red-500 text-xs">Name is required</p>}
          />
          <Input
            label="Email"
            placeholder="Enter your email... "
            required
            error={
              <p className="text-red-500 text-xs">Please enter a valid email</p>
            }
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password... "
            required
            error={<p className="text-red-500 text-xs">Password is required</p>}
          />
          <Input
            label="Age"
            type="number"
            placeholder="Enter your age... "
            required
            error={<p className="text-red-500 text-xs">Age is required</p>}
          />
        </div>
      </section>

      <section className="space-y-4 bg-slate-900 p-4">
        <div className=" text-white">
          <h2 className="text-sm font-semibold ">Form Actions</h2>
          <p className="text-xs ">
            Reusable cards for displaying dashboard statistics.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="space-x-3">
            <Button variant="primary">Submit</Button>
            <Button variant="secondary">Save</Button>
            <Button variant="outline">Cancel</Button>
            <Button variant="outline">Reset</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormComponents;
