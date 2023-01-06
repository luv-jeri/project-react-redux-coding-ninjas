import React from 'react';
import style from './Pager.module.css';
function Pager({ setter }) {
  const array = [...Array(20).keys()];

  return (
    <div className={style.pager_container}>
      {array.map((el) => {
        const handleClick = () => {
          setter(el);
        };
        return (
          <div onClick={handleClick} key={el} className={style.pager_num}>
            {el}
          </div>
        );
      })}
    </div>
  );
}

export default Pager;
