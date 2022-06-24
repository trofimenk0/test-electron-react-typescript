import React from 'react';
import TemplateDefault from 'renderer/components/templates/default/TemplateDefault';
import styles from './PageHome.module.scss';

const Home = () => {
  return (
    <div className={styles.pageHome}>
      <TemplateDefault>Hello!</TemplateDefault>
    </div>
  );
};

export default Home;
