import styles from './styles.module.css';

export default function Text({ children, ...props }) {
    return (
        <div className={styles.container}>
            <h1
                className={styles.titulo}
                {...props}
            >
                {children}
            </h1>
        </div>
    );
}