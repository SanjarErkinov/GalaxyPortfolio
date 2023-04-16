import Image from 'next/image';
import styles from './Travel.module.css'


const Travel = () => {
    return (
        <div className={styles.Travel}>
            <div className={styles.Travel__container}>
                <div className={styles.Travel__logo}>
                    <Image src='/TravelImg/TravelLogo.png' alt='' width={430} height={380} />
                </div>
                <div className={styles.Travel__body}>
                    <div className={styles.Travel__info}>
                        <h1>Explore</h1>
                        <div className={styles.Travel__content}>
                            <div className={styles.Travel__map}>
                                <Image className={styles.Travel__map_img} src='/TravelImg/Travelmap.png' alt='' width={412} height={560} />
                            </div>
                            <div className={styles.Travel__explain}>
                                <p>
                                    Traveling through the cities provide a
                                    different experience. It provides a
                                    perspective to way of life...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Travel__bottom_img}>
                        <Image src='/TravelImg/Travel.png' alt='' width={274} height={504} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel;