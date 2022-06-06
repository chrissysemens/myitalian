import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Card, CardProps } from "./Components/Card";
import { Image } from "./Components/Image";
import { useFirebase } from "./Hooks/useFirebase";
import back from "./assets/back.svg";
import forward from "./assets/forward.svg";
import shuffle from "lodash/shuffle";

function App() {
  const { data } = useFirebase<CardProps>({ collectionName: "Translations" });
  const [number, setNumber] = useState<number>(0);
  const [cards, setCards] = useState<Array<CardProps>>([]);

  useEffect(() => {
    const shuffled = shuffle(data);
    setCards(shuffled);
  }, [data]);

  const next = () => {
    const i = number + 1 > data.length - 1 ? 0 : number + 1;
    setNumber(i);
  };

  const previous = () => {
    const i = number - 1 < 0 ? data.length - 1 : number - 1;
    setNumber(i);
  };

  return (
    <div className={styles.app}>
      {cards[number] && (
        <>
          <div className={styles.card}>
            <Card
              italian={cards[number].italian}
              english={cards[number].english}
            />
          </div>
          <div className={styles.buttons}>
            <div className={styles.back} onClick={() => previous()}>
              <Image src={back} alt="Previous" height={80} width={80} />
            </div>
            <div className={styles.forward} onClick={() => next()}>
              <Image src={forward} alt="Next" height={80} width={80} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
