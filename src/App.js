import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./components/Reducer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import RightBar from "./components/RightBar/RightBar";
import styles from "./App.module.css";

export const MyContext = createContext(null);

function App() {
  const [numState, dispatch] = useReducer(reducer, []);

  const addCard = () => {
    dispatch({
      type: "addItem",
      payload: {
        randNum: Math.floor(Math.random() * 1000),
      },
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: "deleteItem",
      payload: {
        id: id,
      },
    });
  };

  const sortHandler = () => {
    dispatch({
      type: "sortItem",
    });
  };

  const getNumState = () => {
    let stored = JSON.parse(localStorage.getItem("cards"));
    if (stored) {
      dispatch({
        type: "getNumState",
        payload: {
          stored: stored,
        },
      });
    }
  };

  useEffect(() => {
    getNumState();
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(numState));
  }, [numState]);

  return (
    <MyContext.Provider
      value={{
        addCard: addCard,
        deleteItem: deleteItem,
        sortHandler: sortHandler,
        numState: numState,
      }}
    >
      <div className={styles.App}>
        <div className={styles.container}>
          <Header />
          <Main className={styles.main} />
          <Footer />
        </div>
        <div className={styles.rightBar}>
          <RightBar />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
