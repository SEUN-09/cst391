import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ConsignmentList from './components/ConsignmentList';
import ConsignmentForm from './components/ConsignmentForm';
import ConsignmentDetail from './components/ConsignmentDetail';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ConsignmentList />} />
          <Route path="/consignments" element={<ConsignmentList />} />
          <Route path="/consignments/new" element={<ConsignmentForm />} />
          <Route path="/consignments/edit/:id" element={<ConsignmentForm />} />
          <Route path="/consignments/:id" element={<ConsignmentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
