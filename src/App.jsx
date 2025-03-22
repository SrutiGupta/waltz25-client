import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
