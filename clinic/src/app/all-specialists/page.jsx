"use client"
import styles from './all-specialists.module.css';
import { allSpecialists } from '../data/specialistsData';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const AllSpecialists = () => {

    const headerRef = useRef(null);
    const timeoutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const [paragraphVisible, isParagraphVisible] = useState(false);
    const text = 'Наші фахівці:';

    useEffect(() => {
        isParagraphVisible(true);
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = setTimeout(() => {
                        setAnimationKey(prev => prev + 1);
                        setIsVisible(true);
                    }, 50);

                } else {
                    setIsVisible(false);
                }
            },

            { threshold: 0.5 }
        )
        if (headerRef.current) {
            observer.observe(headerRef.current);
        }
        return () => {
            clearTimeout(timeoutRef.current);
            observer.disconnect();
        };
    }, [])

    return (
        <div className={styles.wrap}>
            <div className={styles.head}>
                <h1 ref={headerRef}>
                    <span className={styles.animation}>
                        {isVisible && text.split('').map((el, index) => (
                            <span key={`${animationKey}-${index}`} style={{ animationDelay: `${index * 0.03}s` }} className={styles.letters}>
                                {el === " " ? "\u00a0" : el}
                            </span>
                        ))}
                    </span>
                </h1>
                <p className={`${paragraphVisible ? styles.paragraph_visible : ''}`}>
                    У Центрі ветеринарної медицини «ЦВМ на Разумовській» працює команда професіоналів,
                    яка щодня піклується про здоров’я ваших улюбленців. Наші лікарі мають не лише
                    глибокі знання, а й багаторічний практичний досвід у сфері ветеринарії.
                    У нас ви знайдете фахівців різних напрямків — від терапевтів і хірургів до
                    кардіологів, дерматологів та стоматологів.
                </p>
            </div>
            <div className={styles.specialists}>
                {allSpecialists.map((el, index) => {
                    return <div key={index} className={styles.card}>
                        <article className={styles.top_description}>
                            <h4>{el.name}</h4>
                            <p>{el.speciality}</p>
                        </article>
                        <Image src={el.photo} width={200} height={200} alt='doctor' />
                        <article className={styles.bottom_description}>
                            <h4>{el.name}</h4>
                            <p>{el.status}</p>
                        </article>
                    </div>
                })}
            </div>
            <div className={styles.banner}>
                <h2>Хочете зв&apos;язатися з кимось із наших спеціалістів?</h2>
                <svg height="50px" viewBox="75 110 370 300" width="60px" className={styles.arrow}>
                    <path d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z" />
                </svg>
                <p>
                    телефонуйте на номер клініки
                    <span>
                        <svg height="25" viewBox="0 0 512 512" width="25" className={styles.telephone_icon}>
                            <title />
                            <path d="M391,480c-19.52,0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91,298.77,93.61,267.79,61,208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82,73.38,58.16,62.65,74.11,52A176.3,176.3,0,0,1,102.75,36.8c1-.43,1.93-.84,2.76-1.21,4.95-2.23,12.45-5.6,21.95-2,6.34,2.38,12,7.25,20.86,16,18.17,17.92,43,57.83,52.16,77.43,6.15,13.21,10.22,21.93,10.23,31.71,0,11.45-5.76,20.28-12.75,29.81-1.31,1.79-2.61,3.5-3.87,5.16-7.61,10-9.28,12.89-8.18,18.05,2.23,10.37,18.86,41.24,46.19,68.51s57.31,42.85,67.72,45.07c5.38,1.15,8.33-.59,18.65-8.47,1.48-1.13,3-2.3,4.59-3.47,10.66-7.93,19.08-13.54,30.26-13.54h.06c9.73,0,18.06,4.22,31.86,11.18,18,9.08,59.11,33.59,77.14,51.78,8.77,8.84,13.66,14.48,16.05,20.81,3.6,9.53.21,17-2,22-.37.83-.78,1.74-1.21,2.75a176.49,176.49,0,0,1-15.29,28.58c-10.63,15.9-21.4,28.21-39.38,36.58A67.42,67.42,0,0,1,391,480Z" />
                        </svg>
                        <span>(094) 917-33-80</span>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default AllSpecialists;