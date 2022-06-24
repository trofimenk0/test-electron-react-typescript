import React from 'react';
import styles from './Image.module.scss';

interface ImageProps {
  height?: string;
  width?: string;
}

const Image = ({ height, width }: ImageProps) => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
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
