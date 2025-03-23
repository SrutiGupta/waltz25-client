import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"; // Make sure the path is correct

function App() {
  return (
    <Router>
      <div className="App">
        {/* Other Components (like Navbar, Home, etc.) can be added here */}
        
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<h1>Welcome to Waltz 2025</h1>} />
          {/* Add other routes here if needed */}
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;