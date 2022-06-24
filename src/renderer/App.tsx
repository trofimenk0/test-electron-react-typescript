import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import PageHome from './components/pages/home/PageHome';
import PageClients from './components/pages/clients/PageClients';
import PageTeachers from './components/pages/teachers/PageTeachers';
import PageCourses from './components/pages/courses/PageCourses';
import PagePaymnets from './components/pages/payments/PagePaymnets';
import PageInvoices from './components/pages/invoices/PageInvoices';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/clients" element={<PageClients />} />
      <Route path="/teachers" element={<PageTeachers />} />
      <Route path="/courses" element={<PageCourses />} />
      <Route path="/payments" element={<PagePaymnets />} />
      <Route path="/invoices" element={<PageInvoices />} />
    </Routes>
  );
};

export default App;
