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
  

//  ================================ For SignUp ======================================

export const validateSignupStep1 = (values) => {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = "Full name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
  
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Invalid email format";
    }
  
    if (!values.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }
  
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
  
    if (!values.role) {
      errors.role = "Role is required";
    }
  
    return errors;
  };
  
  export const validateSignupStep2 = (values, role) => {
    let errors = {};
  
    if (role === "Student") {
      if (!values.department) {
        errors.department = "Department is required";
      }
      if (!values.currentYear) {
        errors.currentYear = "Current year is required";
      }
      if (!values.rollNumber.trim()) {
        errors.rollNumber = "Roll number is required";
      }
    } else if (role === "Alumni") {
      if (!values.gradYear) {
        errors.gradYear = "Graduation year is required";
      }
      if (!values.company.trim()) {
        errors.company = "Company name is required";
      }
    } else if (role === "Faculty") {
      if (!values.department) {
        errors.department = "Department is required";
      }
    }
  
    return errors;
  };
  
  export const validateSignupStep3 = (values) => {
    let errors = {};
  
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    if (!values.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    return errors;
  };
  