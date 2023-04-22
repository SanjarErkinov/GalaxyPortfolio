import Image from 'next/image';
import styles from './Travel.module.css'
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

const titleAnimation2 = {
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

const imgAnimation = {
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


const Travel = () => {
    return (
        <div className={styles.travel}>
            <div className={styles.travel__container}>
                <motion.div
                    className={styles.travel__logo}
                    custom={2}
                    variants={imgAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.7,
                    }}
                >
                    <Image src='/TravelImg/TravelLogo.png' alt='planet' width={430} height={380} />
                </motion.div>
                <div className={styles.travel__body}>
                    <motion.div
                        className={styles.travel__info}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                    >
                        <motion.h1
                            custom={1}
                            variants={titleAnimation}
                        >Explore</motion.h1>
                        <motion.div
                            className={styles.travel__content}
                            custom={2}
                            variants={titleAnimation}
                        >
                            <div className={styles.travel__map}>
                                <Image className={styles.travel__map_img} src='/TravelImg/Travelmap.png' alt='map' width={412} height={560} />
                            </div>
                            <div className={styles.travel__explain}>
                                <motion.p
                                    custom={3}
                                    variants={titleAnimation2}
                                >
                                    Traveling through the cities provide a
                                    different experience. It provides a
                                    perspective to way of life...
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={styles.travel__bottom_img}
                        custom={2}
                        variants={imgAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                    >
                        <Image src='/TravelImg/Travel.png' alt='happy-girl' width={274} height={504} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Travel;