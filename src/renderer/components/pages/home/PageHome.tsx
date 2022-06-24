import React from 'react';
import WidgetTotals from 'renderer/components/organisms/widgetTotals/WidgetTotals';
import styles from './PageHome.module.scss';

const PageHome = () => {
  return (
    <div className={styles.pageHome}>
      <WidgetTotals />
    </div>
  );
};

export default PageHome;
