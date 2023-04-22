import styles from './Home.module.css'
import Image from 'next/image';
import { motion } from "framer-motion"

const titleAnimation = {
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

const Home = () => {
    return (
        <motion.div
            className={styles.home}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
            }}
        >
            <div className={styles.home__container}>
                <div className={styles.home__body}>
                    <div className={styles.home__info}>
                        <motion.div
                            className={styles.home__title}
                            custom={1}
                            variants={titleAnimation}
                        >
                            <h1>Hi , I am Sakshi</h1>
                            <p>UX Designer <br /> Based in Vancouver</p>
                        </motion.div>
                        <motion.div
                            className={styles.home__btn}
                            custom={2}
                            variants={titleAnimation}
                        >
                            <button>ㅤㅤㅤHire Meㅤㅤㅤ</button>
                            <button>Download Resume</button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                className={styles.bottom__img}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
                custom={3}
                variants={titleAnimation}
            >
                <Image src='/HomeImg/Home2.png' alt='planet' width={554} height={422} />
            </motion.div>
        </motion.div>
    );
}

export default Home;