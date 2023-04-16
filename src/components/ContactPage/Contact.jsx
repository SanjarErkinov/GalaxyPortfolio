import Image from 'next/image';
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.Contact}>
            <div className={styles.contact__bg}></div>
            <div className={styles.Contact__logo}>
                <Image src='/ArtworkImg/Artwork.png' alt='' width={180} height={180} />
            </div>
            <div className={styles.Contact__container}>
                <a name="contact"></a>
                <div className={styles.Contact__img}>
                    <Image src='/ContactImg/Contact.png' alt='' width={428} height={550} />
                </div>
                <div className={styles.Contact__body}>
                    <div className={styles.Contact__content}>
                        <div className={styles.Contact__info}>
                            <h1>Get in touch</h1>
                            <p>I am very approachable, I would
                                love to hear from you. Feel free to
                                email me or contact me on my social
                                media accounts.</p>
                            <p>Thank you for your time.</p>
                            <div className={styles.info__bottom}>
                                <div className={styles.info__img}>
                                    <Image src='/ContactImg/Contact2.png' alt='' width={150} height={144} />
                                </div>
                                <p>sakshiprasad26@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.Contact__form}>
                            <h1>Send me a message</h1>
                            <input type="text" required name='name' placeholder='Name' />
                            <input type="email" required name='email' placeholder='Email' />
                            <input type="subject" required name='subject' placeholder='Subject' />
                            <textarea rows="12" required name="comment" placeholder='Message' ></textarea>
                            <div>
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;