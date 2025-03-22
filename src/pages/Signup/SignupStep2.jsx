import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSignupStep2 } from "../../schema/validateSignupStep2";

const SignupStep2 = ({ next, prev, values, role }) => {
  return (
    <Formik
      initialValues={values}
      validate={(values) => validateSignupStep2(values, role)}
      onSubmit={(values) => next(values)}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          {role === "Student" && (
            <>
              <Field as="select" name="department" className="input-field">
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
              </Field>
              <ErrorMessage name="department" component="div" className="error-text" />

              <Field as="select" name="currentYear" className="input-field">
                <option value="">Select Year</option>
                <option value="1st">1st</option>
              </Field>
              <ErrorMessage name="currentYear" component="div" className="error-text" />

              <Field type="text" name="rollNumber" placeholder="Roll Number" className="input-field" />
              <ErrorMessage name="rollNumber" component="div" className="error-text" />
            </>
          )}

          <div className="flex justify-between">
            <button type="button" onClick={prev} className="btn-secondary">Previous</button>
            <button type="submit" className="btn-primary">Next</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupStep2;
