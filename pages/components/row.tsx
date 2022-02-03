import React from "react";
import Letter from "./letter";
import styles from "./row.module.css"
interface Props {
  word: string;
  score: number[] | null;
  shake?: boolean;
}

const Row: React.FC<Props> = ({ word, score, shake }) => {
  return (
    <div style={{ display: "flex", margin: 5 }} className={shake ? styles.shakeEffect : ''}>
      <Letter character={word?.[0]} score={score?.[0]} />
      <Letter character={word?.[1]} score={score?.[1]} />
      <Letter character={word?.[2]} score={score?.[2]} />
      <Letter character={word?.[3]} score={score?.[3]} />
      <Letter character={word?.[4]} score={score?.[4]} />
    </div>
  );
};

export default Row;
