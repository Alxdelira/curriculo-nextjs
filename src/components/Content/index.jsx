import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb'
import styles from './styles.module.css';

export default function Content({ children, ...props }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.texto_primary}>Desenvolvedor Full Stack</p>
                <p className={styles.texto_secundary}>
                    Sou um entusiasta da tecnologia e um desenvolvedor Full Stack com
                    habilidades sólidas em várias tecnologias. Tenho um alto nível de
                    proficiência em:
                </p>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <FaReact className={styles.icon} /> React: Tenho experiência em criar
                        interfaces de usuário dinâmicas e responsivas usando a biblioteca
                        React.
                    </li>
                    <li className={styles.li}>
                        <TbBrandNextjs className={styles.icon} /> Next.js: Utilizo o framework Next.js
                        para construir aplicações web modernas, otimizadas para SEO e com
                        carregamento rápido.
                    </li>
                    <li className={styles.li}>
                        <FaNodeJs className={styles.icon} /> Node.js: Além do meu trabalho front-end,
                        sou habilidoso no desenvolvimento back-end usando Node.js, o que me
                        permite criar funcionalidades completas e escaláveis.
                    </li>
                    <li className={styles.li}>
                        <FaGit className={styles.icon} /> Git: Tenho proficiência no controle de
                        versão usando Git, garantindo um gerenciamento eficiente do
                        código-fonte e colaboração em equipe.
                    </li>
                </ul>
                <p className={styles.p}>
                    Através do uso dessas tecnologias, sou capaz de criar soluções web
                    completas, desde a construção de interfaces envolventes até a
                    implementação de funcionalidades robustas. Minha paixão pela tecnologia e
                    meu comprometimento com o aprendizado contínuo me tornam um profissional
                    valioso em projetos de desenvolvimento.
                </p>
            </div>
            {children}
        </div>
    );
}
