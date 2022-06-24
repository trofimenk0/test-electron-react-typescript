import React from 'react';
import TemplateDefault from 'renderer/components/templates/default/TemplateDefault';
import styles from './PageTeachers.module.scss';

const PageTeachers = () => {
  return (
    <div className={styles.pageTeachers}>
      <TemplateDefault>Teachers page</TemplateDefault>
    </div>
  );
};

export default PageTeachers;
