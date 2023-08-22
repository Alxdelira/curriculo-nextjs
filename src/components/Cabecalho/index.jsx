import Link from 'next/link';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { BiMap } from 'react-icons/bi'

export default function Cabecalho() {

    const api_github = 'https://api.github.com/users/Alxdelira';
    const [user, setUser] = useState("");

    useEffect(() => {
        fetch(api_github)
            .then((res) => res.json())
            .then((json) => setUser(json));
    }, []);

    const midias = [
        { id: 1, link: 'https://www.linkedin.com/in/alxdelira/', icone: '/assets/linkedin.png' },
        { id: 2, link: 'https://github.com/Alxdelira', icone: '/assets/github.png' },
        { id: 3, link: 'https://www.instagram.com/alx_delira/gitl', icone: '/assets/instagram.svg' },
        { id: 4, link: 'https://gitlab.fslab.dev/Alexandre', icone: '/assets/gitlab.png' },
    ];


    return (
        <div className={styles.container}>
            <div className={styles.container_imagem}>
                <div className={styles.profileContainer}>
                    <img className={styles.ft_perfil} src={user.avatar_url} />
                </div>
                <div className={styles.container_texto}>
                    <h1 className={styles.nome}>{user.name}</h1>
                    <h2 className={styles.profissao}>{user.bio}</h2>
                    <h3 className={styles.profissao}><BiMap className={styles.icon}/>{user.location}</h3>
                </div>
                <div className={styles.midiasContainer}>
                    {midias.map(item => (
                        <Link href={item.link} key={item.id}>
                            <img className={styles.midias} src={item.icone} alt='Icone da midia' />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

