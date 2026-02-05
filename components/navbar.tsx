import Link from "next/link";
import styles from './components.module.css'

const Navbar = () => {
    return ( 
        <nav className={styles.navbar}>
            <Link href={'/'}>WILD BLOOM</Link>
            <div className={styles.container}>
                <Link href={'/shop'}>Shop</Link>
                <Link href={'/newArrivals'}>New Arrivals</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'cart'}>Cart</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;