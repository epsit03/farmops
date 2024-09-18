import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GramPanchayatLanding from "./components/GramPanchayatLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<GramPanchayatLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
