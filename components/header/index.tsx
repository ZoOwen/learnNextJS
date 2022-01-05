import Link from 'next/link';
import styles from './Header.module.css';
export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}><Link href="/"><a>home</a></Link></li>
                <li className={styles.item}><Link href="/blog"><a>blog</a></Link></li>
                <li className={styles.item}><Link href="/users"><a>users</a></Link></li>
                <li className={styles.item}><Link href="/users/details"><a>details</a></Link></li>
            </ul>
        </header>

    )
}
