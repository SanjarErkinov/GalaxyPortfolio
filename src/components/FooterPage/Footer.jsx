import Image from 'next/image';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.Footer__container}>
                <div className={styles.Footer__body}>
                    <nav className={styles.Footer__menu}>
                        <ul>
                            <li><a href="#top"><Image src='/FooterImg/icon1.png' alt='' width={24} height={24} /></a></li>
                            <li><a href="#top">Home</a></li>
                            <li><a href="#about"><Image src='/FooterImg/icon2.png' alt='' width={24} height={24} /></a></li>
                            <li><a href="#about">About me</a></li>
                            <li><a href="#work"><Image src='/FooterImg/icon3.png' alt='' width={24} height={24} /></a> </li>
                            <li><a href="#work">Work</a> </li>
                            <li><a href="#contact"><Image src='/FooterImg/icon4.png' alt='' width={24} height={24} /></a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <nav className={styles.Footer__social}>
                        <ul>
                            <li><a href="#"><Image src='/FooterImg/Twitter.png' alt='' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/Instagram.png' alt='' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/LinkedIn.png' alt='' width={40} height={40} /></a></li>
                            <li><a href="#"><Image className={styles.Pinterest} src='/FooterImg/Pinterest.png' alt='' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/Youtube.png' alt='' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/figma.png' alt='' width={40} height={40} /></a></li>
                            <li><a href="#"><Image src='/FooterImg/Github.png' alt='' width={40} height={40} /></a></li>
                        </ul>
                    </nav>
                    <div className={styles.Footer__title} >
                        <p>Designed by sakshidesigns.ca</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;