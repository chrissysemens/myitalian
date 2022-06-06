import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Card, CardProps } from "./Components/Card";
import { Image } from "./Components/Image";
import { useFirebase } from "./Hooks/useFirebase";
import back from "./assets/back.svg";
import forward from "./assets/forward.svg";
import shuffle from "lodash/shuffle";
import { Toggle } from "./Components/Toggle";

function App() {
  const { data } = useFirebase<CardProps>({ collectionName: "Translations" });
  const [number, setNumber] = useState<number>(0);
  const [cards, setCards] = useState<Array<CardProps>>([]);
  const [clickToReveal, setClickToReveal] = useState<boolean>(true);

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
      <div className={styles.revealToggle}>
        <div className={styles.toggleText}>Enable Click to Reveal</div>
        <div className={styles.toggle}>
          <Toggle
            checked={clickToReveal}
            onChange={() => setClickToReveal(!clickToReveal)}
            readonly={false}
            size="s"
            disabled={false}
          />
        </div>
      </div>
      {cards[number] && (
        <>
          <div className={styles.card}>
            <Card
              key={cards[number].english}
              italian={cards[number].italian}
              english={cards[number].english}
              clickToReveal={clickToReveal}
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
