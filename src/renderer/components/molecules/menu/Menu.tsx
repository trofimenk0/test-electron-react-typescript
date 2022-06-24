import React from 'react';
import NavLink from 'renderer/components/atoms/nav-link/NavLink';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/clients">Clients</NavLink>
      <NavLink to="/teachers">Teachers</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/payments">Payments</NavLink>
      <NavLink to="/invoices">Invoices</NavLink>
      {/* <NavLink to="/reports">Reports</NavLink>
      <NavLink to="/import-export">Import / Export</NavLink>
      <NavLink to="/settings">Settings</NavLink> */}
    </nav>
  );
};

export default Menu;
