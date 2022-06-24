import React from 'react';
import Image from 'renderer/components/atoms/image/Image';
import Menu from 'renderer/components/molecules/menu/Menu';
import styles from './Sidebar.module.scss';
import Logo from '../../../assets/images/Logo.svg';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Image height="auto" src={Logo} width="100%" />
      <Menu />
    </aside>
  );
};

export default Sidebar;
