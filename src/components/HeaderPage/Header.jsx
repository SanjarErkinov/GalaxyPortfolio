import Image from 'next/image';
import styles from './Header.module.css'
import { motion } from "framer-motion"

const titleAnimation = {
    hidden: {
        y: -80,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <a name="top"></a>
                <motion.div
                    className={styles.header__body}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                    }}
                >
                    <nav className={styles.menu__body}>
                        <ul>
                            <motion.div
                                custom={1}
                                variants={titleAnimation}
                            >
                                <Image src='/HeaderLogo/Logo.png' alt='company `s logo' width={123} height={123} />
                            </motion.div>
                            <motion.li
                                custom={2}
                                variants={titleAnimation}
                            >
                                <a href="#top">Home</a></motion.li>
                            <motion.li
                                custom={3}
                                variants={titleAnimation}
                            >
                                <a href="#about">About Me</a></motion.li>
                            <motion.li
                                custom={4}
                                variants={titleAnimation}
                            >
                                <a href="#work">Work</a></motion.li>
                            <motion.li
                                custom={5}
                                variants={titleAnimation}
                            >
                                <a href="#contact">Contact</a></motion.li>
                        </ul>
                    </nav>
                </motion.div>
            </div>
        </header>
    );
}

export default Header;