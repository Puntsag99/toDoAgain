import styles from "@/styles/CheckBox.module.css";

export const CheckBox = () => {
  return (
    <div className={styles.checkCont}>
      <input type="checkbox" className={styles.checkInput} />
      <p>afafa</p>
      <button className={styles.deleteCont}>Delete</button>
    </div>
  );
};
