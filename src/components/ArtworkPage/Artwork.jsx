import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import styles from './Artwork.module.css'


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
            <div className={styles.Artwork} >
                <div className={styles.Artwork__logo}>
                    <Image src='/ArtworkImg/Artwork.png' alt='' width={370} height={370} />
                </div>
                <div className={styles.Artwork__container}>
                    <div className={styles.Artwork__body}>
                        <div className={styles.Artwork__info}>
                            <h1>Artworks</h1>
                            <div className={styles.Artwork__slide}>
                                <Slider {...settings}>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork2.png' alt='' width={160} height={150} />
                                        <p>Oil paintings</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork3.png' alt='' width={160} height={150} />
                                        <p>Museums</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork4.png' alt='' width={160} height={150} />
                                        <p>Wall arts</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork2.png' alt='' width={160} height={150} />
                                        <p>Oil paintings</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork3.png' alt='' width={160} height={150} />
                                        <p>Museums</p>
                                    </div>
                                    <div>
                                        <Image src='/ArtworkImg/Artwork4.png' alt='' width={160} height={150} />
                                        <p>Wall arts</p>
                                    </div>
                                </Slider>
                            </div>
                            <div className={styles.Artwork__bottom_img}>
                                <Image src='/TravelImg/Travel.png' alt='' width={274} height={504} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}