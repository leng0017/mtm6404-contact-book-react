import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactList from '../components/ContactList';
import ContactDetails from '../components/ContactDetails';
import NewContact from '../components/NewContact';
import EditContact from '../components/EditContact';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/contact/:id" element={<ContactDetails />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default AppRoutes;
