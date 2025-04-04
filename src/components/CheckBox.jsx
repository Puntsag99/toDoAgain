import styles from "@/styles/CheckBox.module.css";

export const CheckBox = ({ lists, setLists }) => {
  const toggleComplete = (listsId) => {
    setLists;
  };

  return (
    <div>
      {lists.map((item, index) => {
        return (
          <div key={index} className={styles.checkCont}>
            <input type="checkbox" className={styles.checkInput} />
            <p>{item.text}</p>
            <button className={styles.deleteCont}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
