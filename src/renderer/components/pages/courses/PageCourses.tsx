import React from 'react';
import TemplateDefault from 'renderer/components/templates/default/TemplateDefault';
import styles from './PageCourses.module.scss';

const PageCourses = () => {
  return (
    <div className={styles.PageCourses}>
      <TemplateDefault>Courses page</TemplateDefault>
    </div>
  );
};

export default PageCourses;
