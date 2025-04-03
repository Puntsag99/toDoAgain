import styles from "@/styles/Buttons.module.css";

export const Buttons = () => {
  return (
    <div className={styles.buttonCont}>
      <button className={styles.butOne}>All</button>
      <button className={styles.butTwo}>Active</button>
      <button className={styles.butThree}>Completed</button>
    </div>
  );
};
