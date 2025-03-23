import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSignupStep1 } from "../../schema/validate.js";
import { AlertCircle } from "lucide-react"; 

const InputField = ({ field, form: { errors, touched }, ...props }) => {
  const hasError = errors[field.name] && touched[field.name];

  return (
    <div className="relative">
      <input
        {...field}
        {...props}
        className={`input-field w-full pr-10 border rounded-md px-3 py-2 ${
          hasError ? "border-red-500" : "border-gray-300"
        }`}
      />
      {hasError && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
          <AlertCircle size={20} />
        </div>
      )}
    </div>
  );
};

const SignupStep1 = ({ next, values }) => {
  return (
    <Formik initialValues={values} validate={validateSignupStep1} onSubmit={next}>
      {({ errors, touched }) => (
        <Form className="space-y-4">
          <Field type="text" name="name" placeholder="Full Name" component={InputField} />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

          <Field type="email" name="email" placeholder="Email" component={InputField} />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <Field type="text" name="phone" placeholder="Phone Number" component={InputField} />
          <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

          <Field as="select" name="gender" className="input-field w-full border border-gray-300 rounded-md px-3 py-2">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Female">Others</option>
          </Field>
          <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />

          <Field as="select" name="role" className="input-field w-full border border-gray-300 rounded-md px-3 py-2">
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Alumni">Alumni</option>
            <option value="Faculty">Faculty</option>
          </Field>
          <ErrorMessage name="role" component="div" className="text-red-500 text-sm" />

          {/* Centered "Next" button in Red */}
          <div className="flex justify-center pt-6">
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupStep1;
