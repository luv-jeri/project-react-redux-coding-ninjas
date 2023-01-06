import React from 'react';
import style from './Pager.module.css';
function Pager({ setter, page }) {
  const array = [...Array(20).keys()];

  return (
    <div className={style.pager_container}>
      {array.map((el) => {
        const handleClick = () => {
          setter(el);
        };
        return (
          <div
            onClick={handleClick}
            key={el}
            className={`${style.pager_num}  ${
              el === page ? style.pager_item_active : ''
            } `}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
}

export default Pager;
