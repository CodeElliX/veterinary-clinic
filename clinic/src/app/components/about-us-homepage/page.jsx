'use client';
import Image from 'next/image';
import styles from './about-us-homepage.module.css';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const AboutUsHomepage = () => {

    const fotoRef = useRef(null);
    const descRef = useRef(null);
    const [fotoVisible, setFotoVisible] = useState(false);
    const [descVisible, setDescVisible] = useState(false);

    useEffect(() => {
        const fotoObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.3) {
                    setFotoVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        const descObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.4) {
                    setDescVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (fotoRef.current) fotoObserver.observe(fotoRef.current);
        if (descRef.current) descObserver.observe(descRef.current)

    }, [])

    return (
        <>
            <div className={`
        ${styles.foto_section}
        ${!fotoVisible ? styles.hiddenBeforeVisible : ''}
        ${fotoVisible ? styles.slideInLeft : ''}
           `}
                ref={fotoRef}
            >
                <svg enableBackground="new 0 0 64 64" viewBox="0 0 64 64" className={styles.heards}>
                    <g>
                        <path d="M26.4,37.7C26.4,37.7,26.4,37.7,26.4,37.7c-0.3,0-0.5-0.1-0.7-0.3L9.2,20.7C4.4,15.7,4.5,7.9,9.4,3    c1.9-1.9,4.5-3,7.3-3c3.3,0,6.8,1.4,9.7,3.8C29.2,1.4,32.8,0,36.1,0c2.8,0,5.4,1,7.3,3c4.8,4.8,4.9,12.8,0.2,17.8L27.1,37.4    C26.9,37.6,26.6,37.7,26.4,37.7z M16.7,2c-2.3,0-4.3,0.8-5.9,2.4c-4.1,4.2-4.2,10.7-0.2,15l15.7,15.9l15.8-15.9    c4-4.2,3.9-10.9-0.2-15C40.4,2.8,38.4,2,36.1,2c-3.1,0-6.4,1.4-9,3.8c-0.4,0.4-1,0.4-1.4,0C23.1,3.4,19.7,2,16.7,2z" fill="#4D4D4D" />
                        <path d="M47.5,54C47.5,54,47.5,54,47.5,54c-0.3,0-0.5-0.1-0.7-0.3l-8.2-8.3c-2.6-2.7-2.5-6.9,0.1-9.6    c1-1,2.2-1.5,3.6-1.5c1.7,0,3.6,0.8,5.2,2c1.6-1.3,3.5-2,5.2-2c1.4,0,2.6,0.5,3.6,1.5c2.6,2.6,2.6,6.9,0.1,9.5l-8.2,8.3    C48,53.9,47.8,54,47.5,54z M42.3,36.4c-0.9,0-1.6,0.3-2.2,0.9c-1.9,1.9-1.9,4.8-0.1,6.7l7.5,7.6L55,44c1.8-1.9,1.8-4.9-0.1-6.7    c-0.6-0.6-1.3-0.9-2.2-0.9c-1.4,0-3.1,0.8-4.5,2.1c-0.4,0.4-1,0.4-1.4,0C45.5,37.2,43.7,36.4,42.3,36.4z" fill="#4D4D4D" />
                        <path d="M24.8,64C24.8,64,24.8,64,24.8,64c-0.3,0-0.5-0.1-0.7-0.3l-5.5-5.6c-1.8-1.9-1.8-5,0.1-6.9    c0.7-0.7,1.6-1.1,2.6-1.1c1.1,0,2.4,0.5,3.5,1.3c1.1-0.8,2.4-1.3,3.5-1.3c1,0,1.9,0.4,2.6,1.1c1.9,1.9,1.9,5,0.1,6.9l-5.5,5.6    C25.3,63.9,25,64,24.8,64z M21.3,52.2c-0.5,0-0.9,0.2-1.2,0.5c-1.1,1.1-1.1,2.9,0,4.1l4.8,4.8l4.8-4.8c1.1-1.1,1.1-3-0.1-4.1    c-0.3-0.3-0.7-0.5-1.2-0.5c-0.9,0-2,0.5-2.8,1.3c-0.4,0.4-1,0.4-1.4,0C23.2,52.7,22.1,52.2,21.3,52.2z" fill="#4D4D4D" />
                    </g>
                </svg>
                <Image src='/hirurgiya.jpg' alt='terapiya' width={150} height={150} className={styles.hirurgiya} />
                <Image src='/nata_with_puppy.jpg' alt='terapiya' width={150} height={150} className={styles.nata_with_puppy} />
                <Image src='/oleg_stepanovich.jpg' alt='terapiya' width={200} height={200} className={styles.oleg_stepanovich} />
                <div className={styles.pets} ref={descRef}>
                    <Image src='/cat.jpg' alt='terapiya' width={150} height={150} />
                    <Image src='/monkey.jpg' alt='terapiya' width={150} height={150} />
                    <Image src='/puppy_2.jpg' alt='terapiya' width={150} height={150} />
                    <Image src='/red_cat.jpg' alt='terapiya' width={150} height={150} />
                    <Image src='/ost_dog.jpg' alt='terapiya' width={150} height={150} />
                </div>
            </div>
            <div className={`
        ${styles.description_section}
        ${!descVisible ? styles.hiddenBeforeVisible : ''}
        ${descVisible ? styles.slideInRight : ''}
           `}>
                <h1>Про нашу клініку</h1>
                <p>
                    ЦВМ на Разумовській є однім із найстарших ветеринарних центрів в м.Одеса. Клініка була заснована ще у 2000 році і
                    обладнана всім необхідним спорудженням для швидкого і якісного обслуговування нашіх пацієнтів. Ми маємо сучасний цифровий рентген,
                    УЗД-кабінет для абдомінального і кардіологічного обстеження, свою лабораторію, хірургічне відділення, а також інфекційний та післяопераційний стаціонари.
                </p>
                <Link href='/'><span className={styles.btn}>Дізнатися більше</span></Link>
                <Image src='/vet_symbols.png' alt='terapiya' width={500} height={500} />
            </div>
        </>
    )
}

export default AboutUsHomepage;