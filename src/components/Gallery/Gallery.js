import React from "react";
import cn from "classnames";

import Card from "../Card/Card";

import s from "./Gallery.module.scss";

const Gallery = ({ cards }) => {
  return (
    <div className={s.gallery}>
      {cards.length && cards.map((card) => <Card key={card.id} card={card} />)}
    </div>
  );
};

export default Gallery;
