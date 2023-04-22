import Image from 'next/image';
import styles from './About.module.css'
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

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.about__container}>
                <a name="about"></a>
                <div className={styles.about__body}>
                    <motion.div
                        className={styles.about__info}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                    >
                        <motion.div
                            className={styles.about__logo}
                            custom={1}
                            variants={titleAnimation}
                        >
                            <Image src='/AboutImg/Logo.png' alt='about-logo' width={140} height={125} />
                        </motion.div>
                        <motion.div
                            className={styles.about__title}
                            custom={2}
                            variants={titleAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                        >
                            <span> Hi, I am Sakshi, a barista, chef, a salesgirl, an IT support Specialist and now, finally turning to my dream role UX designer. My motto is IDEAS, illustrate designs to empower aspiring solutions.</span> <p> I want to use my skills, designs and creativity to shape and enhance the ideas or solutions that aspire to change the society and benefit
                                every person irrespective of their background. </p> <span> Graduated from Douglas College in March 2022, I have studied various course works and successfully completed variety of projects and worked diverse set of jobs, all of this polishing me towards the bigger goal.</span> <p> Since, my childhood I have this fascination towards machines, computers, and programming. The very first language
                                    introduced to me in grade 3, was PC Logo where on my commands computer used to draw shapes. That was the moment, the idea of putting my art ideas in the computer hit me. </p> <span> Currently, I work part-time as Tech Support (Sales) at The Source and also pursuing Google UX design certification Level 4.</span> Know about me more below...
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className={styles.about__bg_img}
                custom={2}
                variants={imgAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
            >
                <Image src='/AboutImg/About.png' alt='girl with book' width={530} height={931} />
            </motion.div>
            <motion.div
                className={styles.about__bg_img2}
                custom={3}
                variants={titleAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                }}
            >
                <Image src='/AboutImg/About2.png' alt='magic crystal' width={534} height={354} />
            </motion.div>
        </div>
    );
}

export default About;