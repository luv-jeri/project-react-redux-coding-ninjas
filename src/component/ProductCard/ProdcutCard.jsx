import React from 'react';
import style from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
function ProdcutCard(props) {
  const { id, images, price, title, category } = props;
  // const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleClick = () => {
    // navigate(`/product/${id}`);
    dispatch(addToCart(props));
  };

  return (
    <div onClick={handleClick} className={style.card_container}>
      <div className={style.card_image}>
        <img src={images[0]} alt={title} />
      </div>
      <div className={style.card_content}>
        <h2>{title}</h2>
        <h4>
          <span>Price: </span>
          {price}
        </h4>
        <p>
          <span>Category: </span>
          {category.name}
        </p>
      </div>
    </div>
  );
}

export default ProdcutCard;
