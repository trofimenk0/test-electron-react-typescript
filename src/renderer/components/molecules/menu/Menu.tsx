import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <a href="/" className="link">
        Clients
      </a>
      <a href="/" className="link">
        Teachers
      </a>
      <a href="/" className="link">
        Courses
      </a>
      <a href="/" className="link">
        Payments
      </a>
      <a href="/" className="link">
        Invoices
      </a>
      <a href="/" className="link">
        Reports
      </a>
      <a href="/" className="link">
        Import / Export
      </a>
      <a href="/" className="link">
        Settings
      </a>
    </nav>
  );
};

export default Menu;
