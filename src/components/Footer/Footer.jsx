import Link from "next/link";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <Link href="https://github.com/fatimamammadova" className={styles.logo}>
                fatimamammadova
            </Link>
            <div className={styles.text}>
                All rights reserved.
            </div>
        </div>
    )
}

export default Footer;