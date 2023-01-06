import React, { useState, useEffect } from 'react';
import style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductDetails() {
  const { products } = useSelector((store) => store.products);
  const [image, setImage] = useState('');
  const { id } = useParams();

  const product = products.filter((el) => {
    return el.id === id;
  });

  useEffect(() => {
    setImage(product.images[0]);
  }, [product]);

  return (
    <div className={style.container}>
      <div className={style.images_container}>
        <img src={image} className={style.main_image} alt='main-img' />
        <div className={style.images}>
          {product.images.map((el) => {
            return <img src={el} className={style.mini_image} alt={`mini-${el}`} />;
          })}
        </div>
      </div>
      <div className={style.content}></div>
    </div>
  );
}

export default ProductDetails;
