import styles from "@/styles/Form.module.css";
import { useState } from "react";
import { CheckBox } from "@/components";

export const Form = () => {
  const [userInputValue, setUserInputValue] = useState("");

  const [lists, setLists] = useState([]);

  const handleChange = (event) => {
    setUserInputValue(event.target.value);
  };

  const handleClcik = () => {
    if (!userInputValue) {
      alert("Please add a task");
      return;
    }

    const SubmitValue = {
      id: Date.now(),
      text: userInputValue,
      isCompleted: false,
    };

    setLists([SubmitValue, ...lists]);
    setUserInputValue("");
  };

  return (
    <div className={styles.Form}>
      <input
        placeholder="Add new task..."
        className={styles.inputCont}
        onChange={handleChange}
        value={userInputValue}
      />

      <button className={styles.addButton} onClick={handleClcik}>
        Add
      </button>
      {/* <CheckBox /> */}
    </div>
  );
};
