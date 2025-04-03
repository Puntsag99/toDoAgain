import styles from "@/styles/Form.module.css";
import { useState } from "react";

export const Form = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className={styles.Form}>
      <input className={styles.inputCont} onChange={handleChange} />

      <button className={styles.addButton} onClick={handleChange}>
        Add
      </button>
    </div>
  );
};
