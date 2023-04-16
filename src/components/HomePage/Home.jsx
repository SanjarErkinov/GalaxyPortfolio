import styles from './Home.module.css'
import Image from 'next/image';


const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.Home__container}>
                <div className={styles.Home__body}>
                    <div className={styles.Home__info}>
                        <div className={styles.Home__title}>
                            <h1>Hi , I am Sakshi</h1>
                            <p>UX Designer <br /> Based in Vancouver</p>
                        </div>
                        <div className={styles.Home__btn}>
                            <button>ㅤㅤㅤHire Meㅤㅤㅤ</button>
                            <button>Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Bottom__img}>
                    <Image src='/HomeImg/Home2.png' alt='' width={554} height={422} />
                </div>
        </div>
    );
}

export default Home;