
import React, { useState } from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GramPanchayat from './pages/GramPanchayat';
import PanchayatSamiti from './pages/PanchayatSamiti';
import Wards from './pages/Wards';
import VillageDivisions from './pages/VillageDivisions';
import Villages from './pages/Villages';

const App = () => {
  const [userRole, setUserRole] = useState(''); // Replace with actual login logic

  const ProtectedRoute = ({ element, allowedRoles }) => {
    return allowedRoles.includes(userRole) ? element : <Navigate to="/landing" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserRole={setUserRole} />} />
        <Route path="/landing" element={<LandingPage userRole={userRole} />} />
        <Route
          path="/gram-panchayat"
          element={
            <ProtectedRoute element={<GramPanchayat />} allowedRoles={['super-admin']} />
          }
        />
        <Route
          path="/panchayat-samiti"
          element={
            <ProtectedRoute element={<PanchayatSamiti />} allowedRoles={['super-admin', 'committee']} />
          }
        />
        <Route
          path="/wards"
          element={
            <ProtectedRoute element={<Wards />} allowedRoles={['super-admin', 'committee', 'user']} />
          }
        />
        <Route
          path="/village-divisions"
          element={
            <ProtectedRoute element={<VillageDivisions />} allowedRoles={['super-admin', 'committee']} />
          }
        />
        <Route
          path="/villages"
          element={
            <ProtectedRoute element={<Villages />} allowedRoles={['super-admin', 'committee', 'user']} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
