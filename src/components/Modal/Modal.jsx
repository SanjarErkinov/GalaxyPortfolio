import Image from 'next/image';
import styles from './Modal.module.css'

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={styles.Travel__info} onClick={e => e.stopPropagation()}>
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
        </div>
    );
}

export default Modal;