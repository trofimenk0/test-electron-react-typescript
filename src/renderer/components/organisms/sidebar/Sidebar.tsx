import React from 'react';
import NavLink from 'renderer/components/atoms/nav-link/NavLink';
import Image from 'renderer/components/atoms/image/Image';
import Menu from 'renderer/components/molecules/menu/Menu';
import styles from './Sidebar.module.scss';
import Logo from '../../../assets/images/Logo.svg';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <NavLink to="/">
        <Image height="auto" src={Logo} width="100%" />
      </NavLink>
      <Menu />
    </aside>
  );
};

export default Sidebar;
