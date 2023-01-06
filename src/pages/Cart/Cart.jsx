import React from 'react';
import style from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  }
  return (
    <div className={style.container}>
      <h1>Cart</h1>
      {!cart.data.length && <h2>Cart is empty</h2>}
      {cart.data.length
        ? cart.data.map((item) => (
            <div key={item.id} className={style.cart_item}>
              <div className={style.img_container}>
                <img src={item.images[0]} alt={item.title} />
              </div>
              <div className={style.cart_item_content}>
                <h2>{item.title}</h2>
                <h4>
                  <span>Price: </span>
                  {item.price}
                </h4>
                <h4>
                  <span>Quantity: </span>
                  {item.quantity}
                </h4>
                <p>
                  <span>Category: </span>
                  {item.category.name}
                </p>
              </div>
              <button
                onClick={() => {
                  handleRemove(item);
                }}
              >
                Remove
              </button>
            </div>
          ))
        : null}
    </div>
  );
}

export default Cart;
