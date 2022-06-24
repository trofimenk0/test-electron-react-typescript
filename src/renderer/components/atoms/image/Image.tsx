import React from 'react';
import styles from './Image.module.scss';

interface ImageProps {
  height?: string;
  src: string;
  width?: string;
}

const Image = ({ height, src, width }: ImageProps) => {
  return (
    <img
      src={src}
      alt="Logo"
      className={styles.image}
      style={{ height, width }}
    />
  );
};

Image.defaultProps = {
  height: 'auto',
  width: 'auto',
};

export default Image;
