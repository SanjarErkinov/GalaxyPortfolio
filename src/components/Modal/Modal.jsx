import Image from 'next/image';
import styles from './Modal.module.css'

const Modal = ({ active, setActive }) => {
    return (
        <div className={styles.modal} onClick={() => setActive(false)}>
            <div className={styles.travel__info} onClick={e => e.stopPropagation()}>
                <div className={styles.travel__content}>
                    <div className={styles.travel__map}>
                        <Image className={styles.travel__map_img} src='/TravelImg/Travelmap.png' alt='map' width={412} height={560} />
                    </div>
                    <div className={styles.travel__explain}>
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