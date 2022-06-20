import React, { useState } from "react";
import cn from "classnames";

import s from "./Card.module.scss";

const Card = ({ card }) => {
  const [chosen, setChosen] = useState(false);

  const handleChosenState = () => {
    card.amount && setChosen(!chosen);
  };

  const handleText = () => {
    return chosen ? (
      <p className={s.card__buy}>{card.chosen}</p>
    ) : (
      <p className={s.card__buy}>
        Чего сидишь? Порадуй котэ,{" "}
        <span className={s.card__dashed} onClick={handleChosenState}>
          купи
        </span>
        <span>.</span>
      </p>
    );
  };

  return (
    <div className={s.card}>
      <div
        className={cn(s.card__main, s.pentagon, {
          [s.card__main_type_disabled]: card.amount <= 0,
          [s.card__main_type_chosen]: chosen && card.amount,
        })}
        onClick={handleChosenState}
      >
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
      {card.amount ? (
        handleText()
      ) : (
        <p className={cn(s.card__buy, s.card__buy_type_empty)}>{card.empty}</p>
      )}
    </div>
  );
};

export default Card;
