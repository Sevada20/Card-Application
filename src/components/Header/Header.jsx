import { useContext } from "react";
import { MyContext } from "../../App";
import styles from "./Header.module.css";
function Header() {
  const { addCard, sortHandler } = useContext(MyContext);
  return (
    <div className={styles.header}>
      <button onClick={addCard}>add card</button>
      <button onClick={sortHandler}>sort cards</button>
    </div>
  );
}
export default Header;
