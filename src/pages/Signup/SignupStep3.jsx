import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateSignupStep3 } from "../../schema/validate.js";

const SignupStep3 = ({ prev, values }) => {
  return (
    <Formik initialValues={values} validate={validateSignupStep3} onSubmit={(values) => console.log(values)}>
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <Field type="password" name="password" placeholder="Password" className="input-field" />
          <ErrorMessage name="password" component="div" className="error-text" />

          <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="input-field" />
          <ErrorMessage name="confirmPassword" component="div" className="error-text" />

          <button type="submit" className="btn-primary">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupStep3;
