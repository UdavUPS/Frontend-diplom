import React, { useState } from "react";
import "./StarRating.css";
import Star from './img/Star.svg';
import StarCh from './img/StarCh.svg';

const StarRating = () => {
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
    <img src={selected >= 1 || hover >= 1 ? StarCh : Star} className="last-mes-cor__content__cart__footer__quality__stars__item" onClick={() => setSelected(1)} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}/>
    <img src={selected >= 2 || hover >= 2 ? StarCh : Star} className="last-mes-cor__content__cart__footer__quality__stars__item" onClick={() => setSelected(2)} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)}/>
    <img src={selected >= 3 || hover >= 3 ? StarCh : Star} className="last-mes-cor__content__cart__footer__quality__stars__item" onClick={() => setSelected(3)} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)}/>
    <img src={selected >= 4 || hover >= 4 ? StarCh : Star} className="last-mes-cor__content__cart__footer__quality__stars__item" onClick={() => setSelected(4)} onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)}/>
    <img src={selected >= 5 || hover >= 5 ? StarCh : Star} className="last-mes-cor__content__cart__footer__quality__stars__item" onClick={() => setSelected(5)} onMouseEnter={() => setHover(5)} onMouseLeave={() => setHover(0)}/>
    </>
  );
};

export default StarRating;