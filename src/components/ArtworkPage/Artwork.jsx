import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import styles from './Artwork.module.css'
import { motion } from "framer-motion"

const leftAnimation = {
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


export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 5,
            variableWidth: true,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 100}, background: #04052B;`
                );
            }
        };
        return (
            <div className={styles.artwork} >
                <motion.div
                 className={styles.artwork__logo}
                 custom={1}
                    variants={leftAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                 >
                    <Image src='/ArtworkImg/Artwork.png' alt='planet' width={370} height={370} />
                </motion.div>
                <div className={styles.artwork__container}>
                    <div className={styles.artwork__body}>
                        <motion.div
                         className={styles.artwork__info}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{
                             once: true,
                             amount: 0.3,
                         }}
                         >
                            <motion.h1
                            custom={1}
                            variants={leftAnimation}
                            >Artworks</motion.h1>
                            <motion.div
                             className={styles.artwork__slide}
                             custom={2}
                            variants={leftAnimation}
                             >
                                <Slider {...settings}>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork2.png' alt='picture scroll-1' width={160} height={150} />
                                        <p>Oil paintings</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork3.png' alt='picture scroll-2' width={160} height={150} />
                                        <p>Museums</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork4.png' alt='picture scroll-3' width={160} height={150} />
                                        <p>Wall arts</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork2.png' alt='picture scroll-1' width={160} height={150} />
                                        <p>Oil paintings</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork3.png' alt='picture scroll-2' width={160} height={150} />
                                        <p>Museums</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork4.png' alt='picture scroll-3' width={160} height={150} />
                                        <p>Wall arts</p>
                                    </div>
                                </Slider>
                            </motion.div>
                            <div className={styles.artwork__bottom_img}>
                                <Image src='/TravelImg/Travel.png' alt='happy girl' width={274} height={504} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        );
    }
}