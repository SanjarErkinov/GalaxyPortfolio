import Image from 'next/image';
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.About}>
            <div className={styles.About__container}>
                <a name="about"></a>
                <div className={styles.About__body}>
                    <div className={styles.About__info}>
                        <div className={styles.About__logo}>
                            <Image src='/AboutImg/Logo.png' alt='' width={140} height={125} />
                        </div>

                        <div className={styles.About__title}> <span> Hi, I am Sakshi, a barista, chef, a salesgirl, an IT support Specialist and now, finally turning to my dream role UX designer. My motto is IDEAS, illustrate designs to empower aspiring solutions.</span> <p> I want to use my skills, designs and creativity to shape and enhance the ideas or solutions that aspire to change the society and benefit
                            every person irrespective of their background. </p> <span> Graduated from Douglas College in March 2022, I have studied various course works and successfully completed variety of projects and worked diverse set of jobs, all of this polishing me towards the bigger goal.</span> <p> Since, my childhood I have this fascination towards machines, computers, and programming. The very first language
                                introduced to me in grade 3, was PC Logo where on my commands computer used to draw shapes. That was the moment, the idea of putting my art ideas in the computer hit me. </p> <span> Currently, I work part-time as Tech Support (Sales) at The Source and also pursuing Google UX design certification Level 4.</span> Know about me more below...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;