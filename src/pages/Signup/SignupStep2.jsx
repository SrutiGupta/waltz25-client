import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSignupStep2 } from "../../schema/validate.js";
import { AlertCircle } from "lucide-react"; // Import red exclamation icon

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

const SignupStep2 = ({ next, prev, values, role }) => {
  return (
    <Formik initialValues={values} validate={(values) => validateSignupStep2(values, role)} onSubmit={next}>
      {({ errors, touched }) => (
        <Form className="space-y-4">
          {/* Department Dropdown (Visible for Students, Faculty, and Alumni) */}
          {(role === "Student" || role === "Faculty" || role === "Alumni") && (
            <>
              <Field as="select" name="department" className="input-field w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="CSE">CSE</option>
                <option value="CE">CE</option>
                <option value="EE">EE</option>
                <option value="AEIE">AEIE</option>
              </Field>
              <ErrorMessage name="department" component="div" className="text-red-500 text-sm" />
            </>
          )}

          {/* Student-Specific Fields */}
          {role === "Student" && (
            <>
              <Field as="select" name="currentYear" className="input-field w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Select Year</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
              </Field>
              <ErrorMessage name="currentYear" component="div" className="text-red-500 text-sm" />

              <Field type="text" name="rollNumber" placeholder="Roll Number" component={InputField} />
              <ErrorMessage name="rollNumber" component="div" className="text-red-500 text-sm" />
            </>
          )}

          {/* Alumni-Specific Fields */}
          {role === "Alumni" && (
            <>
              <Field type="text" name="companyName" placeholder="Company Name" component={InputField} />
              <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />

              <Field as="select" name="graduationYear" className="input-field w-full border border-gray-300 rounded-md px-3 py-2">
                <option value="">Select Graduation Year</option>
                {Array.from({ length: 20 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage name="graduationYear" component="div" className="text-red-500 text-sm" />
            </>
          )}

          {/* Centered "Previous" and "Next" buttons */}
          <div className="flex justify-between pt-6">
            <button type="button" onClick={prev} className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition">
              Previous
            </button>
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupStep2;
