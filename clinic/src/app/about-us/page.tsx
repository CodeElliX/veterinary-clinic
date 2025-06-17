'use client'
import Image from 'next/image';
import styles from './about-us.module.css';
import Advantages from '../components/advantages/page';
import { useEffect, useRef } from 'react';

const AboutUs = () => {

    const imgRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animation)
                }else {
                    entry.target.classList.remove(styles.animation)
                }
            }
            )
        },
            { threshold: 1 }
        )
        imgRef.current.forEach((el) => el && observer.observe(el))
        return () => observer.disconnect();
    }, [])

    const heardsSvg = (<svg enableBackground="new 0 0 64 64" viewBox="0 0 64 64" className={styles.heards}>
        <g>
            <path d="M26.4,37.7C26.4,37.7,26.4,37.7,26.4,37.7c-0.3,0-0.5-0.1-0.7-0.3L9.2,20.7C4.4,15.7,4.5,7.9,9.4,3    c1.9-1.9,4.5-3,7.3-3c3.3,0,6.8,1.4,9.7,3.8C29.2,1.4,32.8,0,36.1,0c2.8,0,5.4,1,7.3,3c4.8,4.8,4.9,12.8,0.2,17.8L27.1,37.4    C26.9,37.6,26.6,37.7,26.4,37.7z M16.7,2c-2.3,0-4.3,0.8-5.9,2.4c-4.1,4.2-4.2,10.7-0.2,15l15.7,15.9l15.8-15.9    c4-4.2,3.9-10.9-0.2-15C40.4,2.8,38.4,2,36.1,2c-3.1,0-6.4,1.4-9,3.8c-0.4,0.4-1,0.4-1.4,0C23.1,3.4,19.7,2,16.7,2z" fill="#4D4D4D" />
            <path d="M47.5,54C47.5,54,47.5,54,47.5,54c-0.3,0-0.5-0.1-0.7-0.3l-8.2-8.3c-2.6-2.7-2.5-6.9,0.1-9.6    c1-1,2.2-1.5,3.6-1.5c1.7,0,3.6,0.8,5.2,2c1.6-1.3,3.5-2,5.2-2c1.4,0,2.6,0.5,3.6,1.5c2.6,2.6,2.6,6.9,0.1,9.5l-8.2,8.3    C48,53.9,47.8,54,47.5,54z M42.3,36.4c-0.9,0-1.6,0.3-2.2,0.9c-1.9,1.9-1.9,4.8-0.1,6.7l7.5,7.6L55,44c1.8-1.9,1.8-4.9-0.1-6.7    c-0.6-0.6-1.3-0.9-2.2-0.9c-1.4,0-3.1,0.8-4.5,2.1c-0.4,0.4-1,0.4-1.4,0C45.5,37.2,43.7,36.4,42.3,36.4z" fill="#4D4D4D" />
            <path d="M24.8,64C24.8,64,24.8,64,24.8,64c-0.3,0-0.5-0.1-0.7-0.3l-5.5-5.6c-1.8-1.9-1.8-5,0.1-6.9    c0.7-0.7,1.6-1.1,2.6-1.1c1.1,0,2.4,0.5,3.5,1.3c1.1-0.8,2.4-1.3,3.5-1.3c1,0,1.9,0.4,2.6,1.1c1.9,1.9,1.9,5,0.1,6.9l-5.5,5.6    C25.3,63.9,25,64,24.8,64z M21.3,52.2c-0.5,0-0.9,0.2-1.2,0.5c-1.1,1.1-1.1,2.9,0,4.1l4.8,4.8l4.8-4.8c1.1-1.1,1.1-3-0.1-4.1    c-0.3-0.3-0.7-0.5-1.2-0.5c-0.9,0-2,0.5-2.8,1.3c-0.4,0.4-1,0.4-1.4,0C23.2,52.7,22.1,52.2,21.3,52.2z" fill="#4D4D4D" />
        </g>
    </svg>);
    return (
        <div className={styles.wrap}>
            <div className={styles.wrap_head}>
                <Image src={'/vetclinic.jpg'} width={1000} height={600} alt='vetclinic' />
                <div className={styles.label_img}>
                    <p>
                        Центр ветеринарної медицини на Разумовській — це простір,
                        де кожна тварина отримує турботу, уважне ставлення та медичну
                        допомогу найвищого рівня.
                    </p>
                </div>
            </div>
            <div className={styles.content}>
                <section className={styles.about}>
                    {heardsSvg}
                    <div className={styles.about__imgs}>
                        <div className={styles.about__imgs_1}>
                            <Image src={'/terapiya.jpg'} width={600} height={600} alt='surgery' />
                        </div>
                        <div className={styles.about__imgs_2}>
                            <Image src={'/kat.jpg'} width={600} height={600} alt='anestiolog' />
                        </div>
                        <div className={styles.about__imgs_3}>
                            <Image src={'/hirurgiya.jpg'} width={600} height={600} alt='anestiolog' />
                        </div>
                        <div className={styles.about__imgs_4}>
                            <Image src={'/olga_doggies.jpg'} width={600} height={600} alt='anestiolog' />
                        </div>
                        <div className={styles.about__imgs_5}>
                            <Image src={'/nazar2.jpg'} width={600} height={600} alt='anestiolog' />
                        </div>
                    </div>
                    <div className={styles.about__description}>
                        <h1>Центр ветеринарної медицини на Разумовській</h1>
                        <p>
                            В самому серці Одеси, на вулиці Разумовській, розташований наш Центр
                            ветеринарної медицини — місце, де турбота про тварин поєднується з
                            високим професіоналізмом та сучасним підходом до лікування.
                        </p>
                        <p>
                            Наша клініка створена для того, щоб забезпечити повний спектр
                            ветеринарної допомоги — від щоденних профілактичних процедур до
                            складних хірургічних втручань. Ми не обмежуємося базовими послугами:
                            наші лікарі спеціалізуються на вузькопрофільній діагностиці, ортопедії,
                            офтальмології, терапії та реабілітації.
                        </p>
                        <p>
                            Що нас відрізняє — це підхід до пацієнта. Ми розуміємо, що кожна
                            тварина — це член родини. Тому працюємо не лише як медики, а
                            як партнери для власників. Ми завжди пояснюємо, що відбувається,
                            що саме потрібно вашому улюбленцю, і чому. Наша мета — прозорість,
                            довіра та ефективність.
                        </p>
                        <p>
                            У клініці працюють досвідчені фахівці, які постійно вдосконалюють
                            свої навички. Ми використовуємо сучасне обладнання та доказову медицину,
                            щоб забезпечити найкращі результати. Всі хірургічні маніпуляції
                            виконуються з урахуванням стандартів безпеки та індивідуальних
                            особливостей тварини.
                        </p>
                        <p>
                            Кожен день ми допомагаємо тваринам жити без болю, рухатися,
                            бачити, дихати на повні груди. І робимо це з любов’ю, тому що
                            ми — не просто клініка. Ми — команда, що піклується.
                        </p>
                    </div>
                </section>
                <section className={styles.animals}>
                    <div ref={(el) => { imgRef.current[0] = el }}>
                        <Image src={'/squirel.jpg'} width={300} height={300} alt='anestiology' />
                    </div>
                    <div ref={(el) => { imgRef.current[1] = el }}>
                        <Image src={'/rabbit.jpg'} width={300} height={300} alt='anestiology' />
                    </div>
                    <div ref={(el) => { imgRef.current[2] = el }}>
                        <Image src={'/ms.jpg'} width={300} height={300} alt='anestiology' />
                    </div>
                    <div ref={(el) => { imgRef.current[3] = el }}>
                        <Image src={'/catSurgery.jpg'} width={300} height={300} alt='anestiology' />
                    </div>
                </section>
            </div>
            <Advantages />
        </div>
    )
}

export default AboutUs;