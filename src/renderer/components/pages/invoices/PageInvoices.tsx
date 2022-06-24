import React from 'react';
import TemplateDefault from 'renderer/components/templates/default/TemplateDefault';
import styles from './PageInvoices.module.scss';

const PageInvoices = () => {
  return (
    <div className={styles.PageInvoices}>
      <TemplateDefault>Invoices page</TemplateDefault>
    </div>
  );
};

export default PageInvoices;
