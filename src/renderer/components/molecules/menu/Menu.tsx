import React from 'react';
import NavLink from 'renderer/components/atoms/nav-link/NavLink';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLink to="/clients">Clients</NavLink>
      <NavLink to="/">Teachers</NavLink>
      <NavLink to="/">Courses</NavLink>
      <NavLink to="/">Payments</NavLink>
      <NavLink to="/">Invoices</NavLink>
      <NavLink to="/">Reports</NavLink>
      <NavLink to="/">Import / Export</NavLink>
      <NavLink to="/">Settings</NavLink>
    </nav>
  );
};

export default Menu;
