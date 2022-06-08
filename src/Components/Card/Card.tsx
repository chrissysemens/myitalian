import React, { useState } from "react";
import styles from "./Card.module.scss";

export type CardProps = {
  english: string;
  italian: string;
  clickToReveal: boolean;
};

const Card = ({ english, italian, clickToReveal }: CardProps) => {
  const [reveal, setReveal] = useState<boolean>(false);

  return (
    <div className={styles.card}>
      <div className={styles.translation}>
        <div className={styles.english}>
          <div className={styles.heading}>English</div>
          <div className={styles.word}>{english}</div>
        </div>
        <div className={styles.italian}>
          <div className={styles.heading}>Italian</div>
          {clickToReveal && !reveal ? (
            <div
              className={styles.revealButton}
              onClick={() => setReveal(!reveal)}
            >
              Reveal
            </div>
          ) : (
            <div className={styles.word}>{italian}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Card };
