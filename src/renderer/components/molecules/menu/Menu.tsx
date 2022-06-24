import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link to="/clients" className="link">
        Clients
      </Link>
      <Link to="/" className="link">
        Teachers
      </Link>
      <Link to="/" className="link">
        Courses
      </Link>
      <Link to="/" className="link">
        Payments
      </Link>
      <Link to="/" className="link">
        Invoices
      </Link>
      <Link to="/" className="link">
        Reports
      </Link>
      <Link to="/" className="link">
        Import / Export
      </Link>
      <Link to="/" className="link">
        Settings
      </Link>
    </nav>
  );
};

export default Menu;
