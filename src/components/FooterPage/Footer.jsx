import Image from 'next/image';
import styles from './Footer.module.css'
import { motion } from "framer-motion"

const upAnimation = {
    hidden: {
        x: 0,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const bottomAnimation = {
    hidden: {
        y: 80,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <motion.div
                    className={styles.footer__body}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                    }}
                >
                    <nav className={styles.footer__menu}>
                        <motion.ul
                            custom={1}
                            variants={bottomAnimation}
                        >
                            <li><a href="#top"><Image src='/FooterImg/icon1.png' alt='home-icon' width={24} height={24} /></a></li>
                            <li><a href="#top">Home</a></li>
                            <li><a href="#about"><Image src='/FooterImg/icon2.png' alt='about-icon' width={24} height={24} /></a></li>
                            <li><a href="#about">About me</a></li>
                            <li><a href="#work"><Image src='/FooterImg/icon3.png' alt='work-icon' width={24} height={24} /></a> </li>
                            <li><a href="#work">Work</a> </li>
                            <li><a href="#contact"><Image src='/FooterImg/icon4.png' alt='contact-icon' width={24} height={24} /></a></li>
                            <li><a href="#contact">Contact</a></li>
                        </motion.ul>
                    </nav>
                    <nav className={styles.footer__social}>
                        <motion.ul
                            custom={2}
                            variants={bottomAnimation}
                        >
                            <li><a href="#"><Image src='/FooterImg/Twitter.png' alt='twitter-logo' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/Instagram.png' alt='instagram-logo' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/LinkedIn.png' alt='linkedIn-logo' width={40} height={40} /></a></li>
                            <li><a href="#"><Image className={styles.pinterest} src='/FooterImg/Pinterest.png' alt='pinterest' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/Youtube.png' alt='youtube' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/figma.png' alt='figma' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/Github.png' alt='github' width={40} height={40} /></a></li>
                        </motion.ul>
                    </nav>
                    <motion.div
                        className={styles.footer__title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                        custom={3}
                        variants={bottomAnimation}
                    >
                        <p>Designed by sakshidesigns.ca</p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                className={styles.footer_bg}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                }}
                custom={1}
                variants={upAnimation}
            >
                <div className={styles.bg1} ></div>
                <div className={styles.bg2} ></div>
                <div className={styles.bg3} ></div>
            </motion.div>
        </footer>
    );
}

export default Footer;