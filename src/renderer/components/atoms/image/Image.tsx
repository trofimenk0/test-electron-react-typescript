import React from 'react';
import styles from './Image.module.scss';

type ImageProps = {
  className?: string;
  src: string;
};

const Image = ({ className, src }: ImageProps) => {
  return <img src={src} alt="Logo" className={styles[className || 'image']} />;
};

Image.defaultProps = {
  className: 'image',
};

export default Image;
