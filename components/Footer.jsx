import styles from "../styles/Footer.module.css"
import Image from "next/image";
const Footer = () => 
{
    return (
        <div id ="footer" className={styles.container}>
            <div className={styles.item}>
                <Image src ="/img/Popeye_the_Sailor.png" width={400} height={400} alt=""/>
            </div>
            <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
           We Love Our Greens! Don't you?
          </h2>
        </div>
            <div className={styles.card}>
            <h1 className={styles.title}>Could you find your favourite Restaurant?</h1>
            {/* <p className={styles.text}>
                Chandrashekharpur, Bhubaneswar
                <br /> Odisha, India
                <br /> (+91) 9936404000
            </p> */}
            <br/>
            <p className={styles.text}>
            Super Food
                <br /> Patia
                <br /> (+91) 867-1011-420
            </p> <br/>
            <p className={styles.text}>
            Fit Treat
                <br /> Patia
                <br /> (+91) 867-1012-456
            </p><br/>
            <p className={styles.text}>
                Bocca Cafe
                <br /> Patia
                <br /> (+91) 867-1013-455
            </p>
            </div>
            <div className={styles.card}>
            <h1 className={styles.title}>We're available during:</h1><br/>
            <p className={styles.text}>
            9:00 - 22:00
                <br /> Monday-Friday
            </p><br/>
            <p className={styles.text}>
            12:00 - 24:00
                <br /> Saturday-Sunday
            </p>
            </div>
        </div>
        </div>  
        
    )
}

export default Footer