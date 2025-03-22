import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "Remember Me:", rememberMe);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Password reset email sent to:", resetEmail);
    setShowForgotPassword(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative">
      {/* Blur Everything Except Forgot Password Box */}
      {showForgotPassword && (
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      )}

      {/* Login Box - Blurred When Forgot Password is Open */}
      <div className={`w-96 p-8 rounded-lg shadow-lg transition ${showForgotPassword ? "blur-sm" : "bg-white"}`}>
        <h2 className="text-6xl font-bold text-center mb-10 text-red-600">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-red-600"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-gray-700">Remember Me</span>
            </label>
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="text-red-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-900 transition"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      {/* Forgot Password Popup (Only This is Clear) */}
      {showForgotPassword && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 z-20">
            <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
            <p className="text-sm text-gray-600 mb-4">Enter your email to reset your password</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                onClick={() => setShowForgotPassword(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-900 transition"
                onClick={handleForgotPassword}
              >
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
