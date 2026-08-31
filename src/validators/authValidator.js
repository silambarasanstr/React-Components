export const validateLogin = (form) => {
  const errors = {};

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Enter a valid email";
  }

  if (!form.password.trim()) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

export const validateRegister = (form) => {
  const errors = {};

  if (!form.firstName.trim()) {
    errors.firstName = "First Name is required";
  } else if (form.firstName.length < 2) {
    errors.firstName = "First Name must be at least 2 characters";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Enter a valid email";
  }

  if (!form.password.trim()) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};