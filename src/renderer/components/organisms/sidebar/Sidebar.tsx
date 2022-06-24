import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      This is Sidebar!
      <div>This is child component DIV</div>
    </aside>
  );
};

export default Sidebar;
