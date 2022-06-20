import React from "react";
import cn from "classnames";

import s from "./Card.module.scss";

const Card = ({ card }) => {
  return (
    <div className={s.card}>
      <div className={cn(s.card__main, s.pentagon)}>
        <div className={cn(s.card__content, s.pentagon)}>
          <div>
            <p className={s.card__text}>Сказочное заморское яство</p>
            <h2 className={s.card__title}>Нямушка</h2>
            <h3 className={s.card__subtitle}>с {card.with}</h3>
            <p className={s.card__text}>
              {card.amount} порций <br /> {card.gift} в подарок <br />{" "}
              {card.addition && card.addition}
            </p>
          </div>
          <div className={s.card__kilo}>
            <p>
              {card.kilo}
              <br />
              <span>кг</span>
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
