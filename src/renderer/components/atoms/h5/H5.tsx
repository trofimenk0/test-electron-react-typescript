import React from 'react';
import styles from './H5.module.scss';

interface H5Props {
  children: React.ReactNode | string;
  className?: string;
}

const H5 = ({ children, className }: H5Props) => {
  return <h5 className={styles[className || 'title']}>{children}</h5>;
};

H5.defaultProps = {
  className: 'title',
};

export default H5;
