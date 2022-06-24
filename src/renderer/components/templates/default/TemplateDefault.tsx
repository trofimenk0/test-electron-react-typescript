import React from 'react';
import styles from './TemplateDefault.module.scss';

interface TemplateDefaultProps {
  children: React.ReactNode;
}

const TemplateDefault = ({ children }: TemplateDefaultProps) => {
  return <div className={styles.templateDefault}>{children}</div>;
};

export default TemplateDefault;
