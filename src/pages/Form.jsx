import React from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";

const Form = () => {
  return (
    <div className="space-y-2">
      <Login />
      <Register />
    </div>
  );
};

export default Form;
