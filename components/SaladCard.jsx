import styles from "../styles/SaladCard.module.css";
import Image from "next/image";
import Link from "next/link";

const SaladCard = ({salad}) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${salad._id}`} passHref>
            <Image src={salad.img} className={styles.imagee} alt="" width="100" height="100"/>
            </Link>
            <h1 className={styles.title}>{salad.title}</h1>
            <span className={styles.price}>Rs {salad.prices[0]}</span>
            <p className={styles.desc}>
                    {salad.desc}
            </p>
        </div>
    );
};

export default SaladCard
