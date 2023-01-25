import { useContext } from "react";
import { MyContext } from "../../App";
import styles from "./Card.module.css";

function Card({ card }) {
  const context = useContext(MyContext);
  return (
    <div className={styles.card}>
      <button onClick={() => context.deleteItem(card.id)}>X</button>
      <div className={styles.num}>{card.randNum}</div>
    </div>
  );
}

export default Card;
