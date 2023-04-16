import Image from 'next/image';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.Header__container}>
                <a name="top"></a>
                <div className={styles.Header__body}>
                    <nav className={styles.menu__body}>
                        <ul>
                            <Image src='/HeaderLogo/Logo.png' alt='' width={123} height={123} />
                            <li><a href="#top">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;