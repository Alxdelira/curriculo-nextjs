
import Link from 'next/link'
import styles from './styles.module.css'

export default function Cabecalho() {
    return (
        <>
            <ul className={styles.menu}>
                <li className={styles.tags}>
                    <Link
                        href="/"
                        className={styles.link}
                    >
                        Home
                    </Link>
                </li>
                <li className={styles.tags}>
                    <Link href="/fotos"
                        className={styles.link}
                    >
                        Galeria
                    </Link>
                </li>
                <li className={styles.tags}>
                    <Link href="/sobre"
                        className={styles.link}
                    >
                        Quem Somos!
                    </Link>
                </li>
            </ul>
        </>
    );
}