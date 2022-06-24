import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavLink.module.scss';

interface LinkProps {
  to: string;
  children?: React.ReactNode | string;
}

const NavLink = ({ to, children }: LinkProps) => {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
};

NavLink.defaultProps = {
  children: 'Link',
};

export default NavLink;
