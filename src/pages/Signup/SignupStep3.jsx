import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSignupStep3 } from "../../schema/validate.js";
import { AlertCircle, Eye, EyeOff } from "lucide-react"; // Error & Eye icons
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const InputField = ({ field, form: { errors, touched }, type, ...props }) => {
  const hasError = errors[field.name] && touched[field.name];
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div className="relative">
      <input
        {...field}
        {...props}
        type={isPasswordField && !showPassword ? "password" : "text"}
        className={`input-field w-full pr-10 border rounded-md px-3 py-2 ${
          hasError ? "border-red-500" : "border-gray-300"
        }`}
      />
      {hasError && (
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-red-500">
          <AlertCircle size={20} />
        </div>
      )}
      {isPasswordField && (
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      )}
    </div>
  );
};

const SignupStep3 = ({ prev, values }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  const handleSubmit = (values, { resetForm }) => {
    Swal.fire({
      icon: "success",
      title: "You are registered successfully!",
      text: `Redirecting to login page in ${countdown} seconds...`,
      showConfirmButton: false,
      timerProgressBar: true,
      didOpen: () => {
        const interval = setInterval(() => {
          setCountdown((prev) => {
            if (prev === 1) {
              clearInterval(interval);
              return 1;
            }
            Swal.update({
              text: `Redirecting to login page in ${prev - 1} seconds...`,
            });
            return prev - 1;
          });
        }, 1000);
      },
      timer: 3000,
      willClose: () => {
        resetForm();
        navigate("/login"); // Redirect to login page
      },
    });
  };

  return (
    <Formik initialValues={values} validate={validateSignupStep3} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className="space-y-4">
          <Field type="password" name="password" placeholder="Password" component={InputField} />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

          <Field type="password" name="confirmPassword" placeholder="Confirm Password" component={InputField} />
          <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />

          {/* Centered Buttons */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={prev}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupStep3;
