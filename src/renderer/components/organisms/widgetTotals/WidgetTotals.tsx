import React from 'react';
import CardTotalAmount from 'renderer/components/molecules/cardTotalAmount/CardTotalAmount';
import styles from './WidgetTotals.module.scss';

const WidgetTotals = () => {
  return (
    <>
      <CardTotalAmount />
      <CardTotalAmount />
      <CardTotalAmount />
    </>
  );
};

export default WidgetTotals;
