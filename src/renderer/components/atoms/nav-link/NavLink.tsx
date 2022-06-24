import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavLink.module.scss';

interface LinkProps {
  children?: React.ReactNode | string;
  className?: string;
  to: string;
}

const NavLink = ({ children, className, to }: LinkProps) => {
  return (
    <Link to={to} className={styles[className || 'link']}>
      {children}
    </Link>
  );
};

NavLink.defaultProps = {
  children: 'Link',
  className: 'link',
};

export default NavLink;
