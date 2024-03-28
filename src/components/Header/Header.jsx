import Link from 'next/link'
import Links from './links/Links'
import styles from './header.module.css'

const Header = () => {

    return (
        <header>
            <div className={styles.container}>
                <Link href="/"  className={styles.logo}>
                    LStore
                </Link>
                <div>
                    <Links/>
                </div>
            </div>
        </header>
    )

}

export default Header