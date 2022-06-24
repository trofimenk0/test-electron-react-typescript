import React from 'react';
import NavLink from 'renderer/components/atoms/nav-link/NavLink';
import Image from 'renderer/components/atoms/image/Image';
import styles from './Menu.module.scss';

import IconHome from '../../../assets/icons/IconHome.svg';
import IconClients from '../../../assets/icons/IconClients.svg';
import IconTeachers from '../../../assets/icons/IconTeachers.svg';
import IconCourses from '../../../assets/icons/IconCourses.svg';
import IconPayments from '../../../assets/icons/IconPayments.svg';
import IconInvoices from '../../../assets/icons/IconInvoices.svg';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLink to="/" className="menuLink">
        <Image src={IconHome} className="menuLinkIcon" />
        Dashboard
      </NavLink>
      <NavLink to="/clients" className="menuLink">
        <Image src={IconClients} className="menuLinkIcon" />
        Clients
      </NavLink>
      <NavLink to="/teachers" className="menuLink">
        <Image src={IconTeachers} className="menuLinkIcon" />
        Teachers
      </NavLink>
      <NavLink to="/courses" className="menuLink">
        <Image src={IconCourses} className="menuLinkIcon" />
        Courses
      </NavLink>
      <NavLink to="/payments" className="menuLink">
        <Image src={IconPayments} className="menuLinkIcon" />
        Payments
      </NavLink>
      <NavLink to="/invoices" className="menuLink">
        <Image src={IconInvoices} className="menuLinkIcon" />
        Invoices
      </NavLink>
      {/* <NavLink to="/reports">Reports</NavLink>
      <NavLink to="/import-export">Import / Export</NavLink>
      <NavLink to="/settings">Settings</NavLink> */}
    </nav>
  );
};

export default Menu;
