import styles from "../styles/SaladList.module.css";
import SaladCard from "./SaladCard"

const SaladList = ({saladList}) => {
    return(
      <div id="saladList" className={styles.container}>
      <h1 className={styles.title}>Order Your Favorite Bowl of Healthiness</h1>
      <p className={styles.desc}>
      Too Tired After Gymming?
      </p>   
      <p className={styles.sentence}>Scroll Down For Some Ready-To-Eat Healthy but Yummy Delicacies....🤤
      </p>
      
      <div className={styles.wrapper}>
        {saladList.map((salad)  => (
          <SaladCard key={salad._id} salad={salad} />
        ))}
      </div>
    </div>
    )
}

export default SaladList



