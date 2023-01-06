import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
import Products from '../../component/Products/Produts';
import Loading from '../../component/Loading/Loading';
import Pager from '../../component/Pager/Pager';

function Home() {
  const { products, limit } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(
      fetchProducts({
        offset: limit * page,
      })
    );
  }, [page]);

  console.log(products.data);

  return (
    <div className={style.container}>
      <Products produts={products.data} />
      <Pager setter={setPage} page={page} />
    </div>
  );
}

export default Home;
