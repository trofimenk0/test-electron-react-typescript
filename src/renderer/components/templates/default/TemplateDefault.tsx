import React from 'react';
import Sidebar from 'renderer/components/organisms/sidebar/Sidebar';
import styles from './TemplateDefault.module.scss';

interface TemplateDefaultProps {
  children: React.ReactNode;
}

const TemplateDefault = ({ children }: TemplateDefaultProps) => {
  return (
    <div className={styles.templateDefault}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default TemplateDefault;
