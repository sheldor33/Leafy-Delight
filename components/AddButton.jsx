import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.mainContainerMainButton}>

    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Add New Salad
    </div>
    </div>
  );
};

export default AddButton; 
