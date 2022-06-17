import React from "react";

import Card from "./components/Card/Card";

import s from "./App.module.scss";

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.app__title}>Ты сегодня покормил кота?</h1>
      <Card />
    </div>
  );
}

export default App;
