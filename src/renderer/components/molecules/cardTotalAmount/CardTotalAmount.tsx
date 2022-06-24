import React from 'react';
import Image from 'renderer/components/atoms/image/Image';
import IconClients from '../../../assets/icons/IconClients.svg';
import styles from './CardTotalAmount.module.scss';

const CardTotalAmount = () => {
  return (
    <div className={styles.cardTotalAmount}>
      <Image src={IconClients} className="rounded" />
      <div className={styles.cardTotalAmount__content}>
        <h5 className={styles.cardTotalAmount__title}>Title</h5>
        <span className={styles.cardTotalAmount__value}>1460</span>
      </div>
    </div>
  );
};

export default CardTotalAmount;
