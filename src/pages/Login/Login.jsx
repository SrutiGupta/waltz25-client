import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineExclamationCircle, AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { validateLogin, validateResetEmail } from "../../schema/validate";

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative">
      {/* Blur background when forgot password is active */}
      {forgotPassword && <div className="absolute inset-0 bg-black opacity-50"></div>}

      {/* Login Form */}
      <div className={`w-96 p-6 rounded-lg z-10 transition ${forgotPassword ? "blur-sm" : ""}`}>
        <h2 className="text-4xl font-bold text-center mb-6 text-red-600">Sign In</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={validateLogin}
          onSubmit={(values) => console.log("Form values:", values)}
        >
          {({ errors, touched }) => (
            <Form className="space-y-6">
              <div>
                <div className="relative flex items-center">
                  <AiOutlineMail className="absolute left-3 text-gray-500 text-xl animate-bounce" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full p-3 pl-10 border rounded-lg focus:outline-none ${
                      errors.email && touched.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && touched.email && (
                    <AiOutlineExclamationCircle className="absolute right-3 text-red-500 text-xl" />
                  )}
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <div className="relative flex items-center">
                  <AiOutlineLock className="absolute left-3 text-gray-500 text-xl animate-bounce" />
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={`w-full p-3 pl-10 pr-10 border rounded-lg focus:outline-none ${
                      errors.password && touched.password ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.password && touched.password && (
                    <AiOutlineExclamationCircle className="absolute right-10 text-red-500 text-xl" />
                  )}
                  <button
                    type="button"
                    className="absolute right-3 text-gray-500 text-xl focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <Field type="checkbox" name="rememberMe" className="mr-2" />
                  Remember Me
                </label>
                <button
                  type="button"
                  className="text-red-600 hover:underline"
                  onClick={() => setForgotPassword(true)}
                >
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="w-1/2 ml-24 bg-red-600 text-white p-3 rounded-lg hover:bg-red-900 transition">
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Forgot Password Modal */}
      {forgotPassword && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 z-20">
            <h3 className="text-lg font-semibold text-center mb-4">Reset Password</h3>

            <Formik
              initialValues={{ email: "" }}
              validate={validateResetEmail}
              onSubmit={(values) => console.log("Reset Email:", values.email)}
            >
              {({ errors, touched }) => (
                <Form>
                  <div>
                    <div className="relative flex items-center">
                      <AiOutlineMail className="absolute left-3 text-gray-500 text-xl animate-bounce" />
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={`w-full p-3 pl-10 border rounded-lg focus:outline-none ${
                          errors.email && touched.email ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.email && touched.email && (
                        <AiOutlineExclamationCircle className="absolute right-3 text-red-500 text-xl" />
                      )}
                    </div>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <button type="submit" className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-800 transition mt-4">
                    Submit
                  </button>

                  <button
                    type="button"
                    className="w-full mt-2 text-gray-600 hover:text-red-600 text-center"
                    onClick={() => setForgotPassword(false)}
                  >
                    Cancel
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
