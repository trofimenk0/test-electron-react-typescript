import React from 'react';
import TemplateDefault from 'renderer/components/templates/default/TemplateDefault';
import styles from './PageHome.module.scss';

const PageHome = () => {
  return (
    <div className={styles.pageHome}>
      <TemplateDefault>Home page</TemplateDefault>
    </div>
  );
};

export default PageHome;
