import Image from 'next/image';
import styles from './Contact.module.css'
import { motion } from "framer-motion"

const leftAnimation = {
    hidden: {
        x: -80,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const rightAnimation = {
    hidden: {
        x: 80,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const Contact = () => {
    return (
        <div className={styles.contact}>
            <motion.div
                className={styles.contact__bg}
                custom={1}
                variants={rightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
            ></motion.div>
            <div className={styles.contact__logo}>
                <Image src='/ArtworkImg/Artwork.png' alt='planet' width={180} height={180} />
            </div>
            <div className={styles.contact__container}>
                <a name="contact"></a>
                <motion.div
                    className={styles.contact__img}
                    custom={1}
                    variants={leftAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.6,
                    }}>
                    <Image src='/ContactImg/Contact.png' alt='girl sitting' width={428} height={550} />
                </motion.div>
                <div className={styles.contact__body}>
                    <motion.div
                        className={styles.contact__content}
                        custom={2}
                        variants={rightAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                        once: true,
                        }}
                    >
                        <motion.div 
                        className={styles.contact__info}
                        custom={4}
                        variants={rightAnimation}
                        >
                            <h1>Get in touch</h1>
                            <p>I am very approachable, I would
                                love to hear from you. Feel free to
                                email me or contact me on my social
                                media accounts.</p>
                            <p>Thank you for your time.</p>
                            <div className={styles.info__bottom}>
                                <div className={styles.info__img}>
                                    <Image src='/ContactImg/Contact2.png' alt='mail' width={150} height={144} />
                                </div>
                                <p>sakshiprasad26@gmail.com</p>
                            </div>
                        </motion.div>
                        <motion.div 
                        className={styles.contact__form}
                        custom={3}
                        variants={rightAnimation}
                        >
                            <h1>Send me a message</h1>
                            <input type="text" required name='name' placeholder='Name' />
                            <input type="email" required name='email' placeholder='Email' />
                            <input type="subject" required name='subject' placeholder='Subject' />
                            <textarea rows="12" required name="comment" placeholder='Message' ></textarea>
                            <div>
                                <button>Send Message</button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Contact;