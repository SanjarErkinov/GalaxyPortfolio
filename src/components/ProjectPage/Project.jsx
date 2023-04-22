"use client";
import Image from 'next/image';
import styles from './Project.module.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import SwiperProject from "@/components/Swiper/SwiperProject";
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

const cardAnimation = {
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

const cardUpAnimation = {
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

const Project = () => {
    return (
        <div className={styles.project}>
            <div className={styles.project__container}>
                <a name="work"></a>
                <div className={styles.project__body}>
                    <motion.div
                        className={styles.project__info}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                        }}
                    >
                        <motion.div
                            className={styles.project__title}
                            custom={1}
                            variants={titleAnimation}
                        >
                            <h1>Work</h1>
                        </motion.div>
                        <motion.div
                            className={styles.project__card}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                        >
                            <motion.div
                                className={styles.card__items}
                                custom={2}
                                variants={titleAnimation}
                            >
                                <div> <Image src='/ProjectImg/ProjectItem.png' alt='monitor' width={204} height={170} /> </div>
                                <p> Mock-ups </p>
                            </motion.div>
                            <motion.div
                                className={styles.card__items}
                                custom={2}
                                variants={cardUpAnimation}
                            >
                                <div> <Image src='/ProjectImg/ProjectItem.png' alt='monitor' width={204} height={170} /> </div>
                                <p> Mock-ups </p>
                            </motion.div>
                            <motion.div
                                className={styles.card__items}
                                custom={2}
                                variants={cardAnimation}
                            >
                                <div> <Image src='/ProjectImg/ProjectItem.png' alt='monitor' width={204} height={170} /> </div>
                                <p> Mock-ups </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <SwiperProject />
                </div>
            </div>
        </div>
    );
}

export default Project;