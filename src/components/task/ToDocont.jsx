import styles from "@/styles/ToDocont.module.css";
import { Form, Buttons, CheckBox } from "@/components";

export const ToDocont = () => {
  return (
    <div className={styles.containerParents}>
      <p className={styles.Todotitle}>To-Do list</p>
      <Form />

      <div className={styles.butParents}>
        <Buttons />
      </div>
      <p className={styles.Notask}>No tasks yet. Add one above!</p>

      <div className={styles.count}>
        <p className={styles.countTitle}> 0 of 1 tasks completed</p>
        <button className={styles.deleteBut}>Clear Completed</button>
      </div>

      <div className={styles.footer}>
        <span>Powered by</span>
        <span className={styles.pineCone}>Pincone academy</span>
      </div>
    </div>
  );
};
