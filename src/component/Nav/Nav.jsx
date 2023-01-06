import React, { useEffect, useState } from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSelector } from 'react-redux';

function Nav() {
  const { user, loading, logout } = useAuth();
  const [items, setItems] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.data.lenght !== 0) {
      const totalItems = cart.data.reduce((total, item) => total + item.quantity, 0);
      setItems(totalItems);
    } else {
      setItems(0);
    }
  }, [cart.data]);

  return (
    <nav className={style.nav_container}>
      <div className={style.logo}>
        <h1>Chhoping</h1>
      </div>
      <div className={style.nav_links}>
        <Link to='/'>Home</Link>
        <Link to='/cart'>
          Cart {items && <span className={style.cart_num}>{items}</span>}
        </Link>
        {loading ? (
          'Loading...'
        ) : user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to='/signin'>Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
