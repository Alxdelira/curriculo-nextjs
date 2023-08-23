import Image from 'next/image'
import styles from './styles.module.css'

const imageSources = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/img/11.jpeg',
    '/img/12.jpeg',
    '/img/13.jpeg',
    '/img/14.jpeg',
    '/img/15.jpeg',
    '/img/16.jpeg',
    '/img/17.jpeg',
    '/img/18.jpeg',
    '/img/19.jpg',
    '/img/20.jpg',
    '/img/21.jpeg',
    '/img/22.jpeg',
    '/img/23.jpeg',
];

export default function Galeria() {
    return (
        <>
            <section className={styles.content}>
                <div className={styles.titulo}>
                <h2>Galeria de Fotos</h2>
                </div>
                <div className={styles.containerContentImages}>
                    {imageSources.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            style={{ border: "3px solid #000" }}
                            layout="fill"
                            className={styles.image}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
