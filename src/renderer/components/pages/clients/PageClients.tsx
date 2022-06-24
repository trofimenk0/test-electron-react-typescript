import React from 'react';
import TemplateDefault from 'renderer/components/templates/default/TemplateDefault';
import styles from './PageClients.module.scss';

const PageClients = () => {
  return (
    <div className={styles.pageClients}>
      <TemplateDefault>Clients page</TemplateDefault>
    </div>
  );
};

export default PageClients;
