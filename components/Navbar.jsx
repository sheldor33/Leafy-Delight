import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => 
{
  const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
              <div className={styles.callButton}>
                <Image src="/img/callImage.png" alt="" width="32" height="32"/>
              </div> 
              <div className={styles.texts}>
                <div className={styles.texts}>ORDER NOW!</div>
                <div className={styles.texts}>+91-9936404000</div> 
              </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                  <Link href="/" passHref>
                    <li className={styles.listItem}>Homepage</li>
                  </Link>
                    <Link href="#saladList" className={styles.listItem}>Products</Link>
                    {/* <li className={styles.listItem}>Menu</li> */}
                    <Image src="/img/Logo.png" alt="" class="center" width="250" height="100" />
                    {/* <li className={styles.listItem}>Events</li> */}
                      <a className={styles.listItem} href="https://www.circle-cafe.com/blog/benefits-of-eating-salads-in-dubai/" target="_blank">
                      Blog
                      </a>
                    <Link href="#footer" className={styles.listItem}>Contact</Link>  
                    {/* <li className={styles.listItem}>Contact</li> */}
                </ul>
            </div>
            <Link href="/Cart" passHref>
              <div className={styles.item}>
                  <div className={styles.cart}>
                    <Image src="/img/cart3.png" alt="" class="center" width="30" height="30" />
                    <div className={styles.counter}>{quantity}</div>   
                  </div>
              </div>
            </Link>
        </div>
    )
}

export default Navbar