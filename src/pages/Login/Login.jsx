import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { AiOutlineExclamationCircle, AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { validateLogin, validateResetEmail } from "../../schema/validate";

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    console.log("Form values:", values);

    let timerInterval;
    let countdown = 3;

    Swal.fire({
      title: "Login Successful!",
      html: `Redirecting to home in <b>${countdown}</b> seconds...`,
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      didOpen: () => {
        const timer = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          countdown--;
          timer.textContent = countdown;
        }, 1000);
      },
      willClose: () => {
        clearInterval(timerInterval);
        navigate("/");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative">
      {forgotPassword && <div className="absolute inset-0 bg-black opacity-50"></div>}

      <div className={`w-96 p-6 rounded-lg z-10 transition ${forgotPassword ? "blur-sm" : ""}`}>
        <h2 className="text-4xl font-bold text-center mb-6 text-red-600">Sign In</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={validateLogin}
          onSubmit={handleLogin}
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
    </div>
  );
};

export default Login;
