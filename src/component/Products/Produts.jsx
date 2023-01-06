import React from 'react';
import style from './Products.module.css';
import ProdcutCard from '../ProductCard/ProdcutCard';

function Produts({ produts }) {
  return (
    <div className={style.container}>
      {produts.length > 0
        ? produts.map((product) => {
            return <ProdcutCard key={product.id} {...product} />;
          })
        : 'No products found'}
    </div>
  );
}

export default Produts;
