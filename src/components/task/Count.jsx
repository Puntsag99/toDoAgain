import styles from "@/styles/Count.module.css";

export const Count = () => {
  return (
    <div className={styles.count}>
      <p className={styles.countTitle}> 0 of 1 tasks completed</p>
      <button className={styles.deleteBut}>Clear Completed</button>
    </div>
  );
};
