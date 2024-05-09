import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TeamPage from './pages/TeamPage';
import CataloguePage from './pages/CataloguePage';
import SupportPage from './pages/SupportPage';
import ServicePage from './pages/ServicePage';
import ContactForm from './component/Homepage/ContactForm';
import DetailCatalougePage from './pages/DetailCatalougePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/detail/:id" element={<DetailCatalougePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
