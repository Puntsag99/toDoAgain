import { Form, Buttons, CheckBox } from "@/components";
import styles from "@/styles/Index.module.css";
import { useState } from "react";
const Home = () => {
  const [lists, setLists] = useState([]);
  // console.log("irj bui value :", lists);

  return (
    <div className={styles.indexContainer}>
      <p className={styles.Todotitle}>To-Do list</p>
      <Form setLists={setLists} lists={lists} />
      <Buttons />
      <CheckBox lists={lists} toggleComplete={setLists} />

      {lists.length === 0 && (
        <p className={styles.Notask}>No tasks yet. Add one above!</p>
      )}

      <div className={styles.footer}>
        <span>Powered by</span>
        <span className={styles.pineCone}>Pincone academy</span>
      </div>
    </div>
  );
};

export default Home;
