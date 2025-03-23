/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSignupStep1 } from "../../schema/validate.js";

const SignupStep1 = ({ next, values }) => {
  return (
    <Formik
      initialValues={values}
      validate={validateSignupStep1}
      onSubmit={(values) => next(values)}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <Field type="text" name="name" placeholder="Full Name" className="input-field" />
          <ErrorMessage name="name" component="div" className="error-text" />

          <Field type="email" name="email" placeholder="Email" className="input-field" />
          <ErrorMessage name="email" component="div" className="error-text" />

          <Field type="text" name="phone" placeholder="Phone Number" className="input-field" />
          <ErrorMessage name="phone" component="div" className="error-text" />

          <Field as="select" name="gender" className="input-field">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Field>
          <ErrorMessage name="gender" component="div" className="error-text" />

          <Field as="select" name="role" className="input-field">
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Alumni">Alumni</option>
            <option value="Faculty">Faculty</option>
          </Field>
          <ErrorMessage name="role" component="div" className="error-text" />

          <button type="submit" className="btn-primary">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupStep1;
