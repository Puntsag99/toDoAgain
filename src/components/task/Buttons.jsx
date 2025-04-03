import styles from "@/styles/Buttons.module.css";

export const Buttons = () => {
  return (
    <div className={styles.buttonCont}>
      <button className={`${styles.button}   ${styles.butOne} `}>All</button>
      <button className={`${styles.button}   ${styles.butTwo} `}>Active</button>
      <button className={`${styles.button}   ${styles.butThree} `}>
        Completed
      </button>
    </div>
  );
};
