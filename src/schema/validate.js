const validateLogin = (values) => {
    let errors = {};
  
    // Email validation
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Invalid email format";
    }
  
    // Password validation
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    return errors;
  };
  
  const validateResetEmail = (values) => {
    let errors = {};
  
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Invalid email format";
    }
  
    return errors;
  };
  
  export { validateLogin, validateResetEmail };
  