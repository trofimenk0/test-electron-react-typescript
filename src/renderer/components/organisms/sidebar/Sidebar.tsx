import React from 'react';
import Image from 'renderer/components/atoms/image/Image';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Image height="100px" />
    </aside>
  );
};

export default Sidebar;
