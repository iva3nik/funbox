import React, { useState, useEffect } from "react";

import Gallery from "./components/Gallery/Gallery";

import s from "./App.module.scss";

const cards = [
  {
    with: "фу-гра",
    amount: 10,
    gift: "мышь",
    addition: "",
    kilo: "0,5",
    id: 1,
    empty: "Печалька, с фуа-гра закончился.",
    chosen: "Печень утки разварная с артишоками.",
  },
  {
    with: "рыбой",
    amount: 40,
    gift: "2 мыши",
    addition: "",
    kilo: "2",
    id: 2,
    empty: "Печалька, с рыбой закончился.",
    chosen: "Головы щучьи с чесноком да свежайшая сёмгушка.",
  },
  {
    with: "куркой",
    amount: 100,
    gift: "5 мышей",
    addition: "заказчик доволен",
    kilo: "5",
    id: 3,
    empty: "Печалька, с курой закончился.",
    chosen: "Филе из цыплят с трюфелями в бульоне.",
  },
  {
    with: "куркой",
    amount: 0,
    gift: "5 мышей",
    addition: "заказчик доволен",
    kilo: "5",
    id: 4,
    empty: "Печалька, с курой закончился.",
    chosen: "Филе из цыплят с трюфелями в бульоне.",
  },
];

function App() {
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    setListCards(cards);
  }, []);

  return (
    <div className={s.app}>
      <h1 className={s.app__title}>Ты сегодня покормил кота?</h1>
      <Gallery cards={listCards} />
    </div>
  );
}

export default App;
