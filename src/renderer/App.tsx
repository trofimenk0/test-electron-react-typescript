import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import TemplateDefault from './components/templates/default/TemplateDefault';
import Sidebar from './components/organisms/sidebar/Sidebar';

import PageHome from './components/pages/home/PageHome';
import PageClients from './components/pages/clients/PageClients';
import PageTeachers from './components/pages/teachers/PageTeachers';
import PageCourses from './components/pages/courses/PageCourses';
import PagePaymnets from './components/pages/payments/PagePaymnets';
import PageInvoices from './components/pages/invoices/PageInvoices';

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Sidebar />

        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/clients" element={<PageClients />} />
          <Route path="/teachers" element={<PageTeachers />} />
          <Route path="/courses" element={<PageCourses />} />
          <Route path="/payments" element={<PagePaymnets />} />
          <Route path="/invoices" element={<PageInvoices />} />
        </Routes>
      </TemplateDefault>
    </Router>
  );
};

export default App;
