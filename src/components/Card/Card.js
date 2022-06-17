import React from "react";
import cn from "classnames";

import cat from "../../assets/img/cat.png";

import s from "./Card.module.scss";

const Card = () => {
  return (
    <div className={s.card}>
      <div className={cn(s.card__main, s.pentagon)}>
        <div className={cn(s.card__content, s.pentagon)}>
          <div>
            <p className={s.card__text}>Сказочное заморское яство</p>
            <h2 className={s.card__title}>Нямушка</h2>
            <h3 className={s.card__subtitle}>с фуа-гра</h3>
            <p className={s.card__text}>
              10 порций <br /> мышь в подарок
            </p>
          </div>
          <div className={s.card__kilo}>
            <p>
              0,5 <span>кг</span>
            </p>
          </div>
        </div>
      </div>
      <p className={s.card__buy}>
        Чего сидишь? Порадуй котэ, <span className={s.card__dashed}>купи</span>
        <span>.</span>
      </p>
    </div>
  );
};

export default Card;
