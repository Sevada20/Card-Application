import { memo } from "react";
import { useContext } from "react";
import { MyContext } from "../../App";
import Card from "../Card/Card";
import styles from "./Main.module.css";

function Main() {
  const { numState } = useContext(MyContext);
  console.log(1111111);
  return (
    <div className={styles.main}>
      {numState.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
export default Main;
