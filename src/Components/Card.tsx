import React from "react";
import styles from "./Card.module.scss";

export type CardProps = {
  english: string;
  italian: string;
};

const Card = ({ english, italian }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.translation}>
        <div className={styles.english}>
          <div className={styles.heading}>English</div>
          <div className={styles.word}>{english}</div>
        </div>
        <div className={styles.italian}>
          <div className={styles.heading}>Italian</div>
          {italian && <div className={styles.word}>{italian}</div>}
        </div>
      </div>
    </div>
  );
};

export { Card };
