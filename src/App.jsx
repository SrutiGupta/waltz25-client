import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"; 
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import Team from "./pages/Team/Team.jsx";
import Merchandise from "./pages/Merchandise/Merchandise.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import Conditions from "./pages/Conditions/Conditions.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home Route */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/team" element={<Team />} />
      <Route path="/merchandise" element={<Merchandise />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/terms" element={<Conditions />} />
    </Routes>
  </Router>
);

       
      </div>
    </Router>
  );
}

export default App;