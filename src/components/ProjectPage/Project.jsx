"use client";
import Image from 'next/image';
import styles from './Project.module.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';


const Project = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className={styles.Project}>
            <div className={styles.Project__container}>
                <a name="work"></a>
                <div className={styles.Project__body}>
                    <div className={styles.Project__info}>
                        <div className={styles.Project__title}>
                            <h1>Work</h1>
                        </div>
                        <div className={styles.Project__card}>
                            <div className={styles.Card__items} onClick={() => setModalActive(true)}>
                                <div> <Image src='/ProjectImg/ProjectItem.png' alt='' width={204} height={170} /> </div>
                                <p> Mock-ups </p>
                            </div>
                            <div className={styles.Card__items}>
                                <div> <Image src='/ProjectImg/ProjectItem.png' alt='' width={204} height={170} /> </div>
                                <p> Mock-ups </p>
                            </div>
                            <div className={styles.Card__items}>
                                <div> <Image src='/ProjectImg/ProjectItem.png' alt='' width={204} height={170} /> </div>
                                <p> Mock-ups </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal active={modalActive} setActive={setModalActive} /> */}
        </div>
    );
}

export default Project;