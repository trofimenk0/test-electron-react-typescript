import React from 'react';
import Image from 'renderer/components/atoms/image/Image';
import IconClients from '../../../assets/icons/IconClients.svg';
import styles from './CardTotalAmount.module.scss';

type CardTotalAmountProps = {
  title: string;
  total: number;
};

const CardTotalAmount = ({ title, total }: CardTotalAmountProps) => {
  return (
    <div className={styles.cardTotalAmount}>
      <Image src={IconClients} className="rounded" />
      <div className={styles.cardTotalAmount__content}>
        <h5 className={styles.cardTotalAmount__title}>{title}</h5>
        <span className={styles.cardTotalAmount__value}>{total}</span>
      </div>
    </div>
  );
};

export default CardTotalAmount;
