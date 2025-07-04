'use client'
import Link from 'next/link';
import styles from './services.module.css';
import { cards } from '../../data/servicesData';
import { useEffect, useRef, useState } from 'react';

const Services = () => {

    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const [titleVisible, setTitleVisible] = useState(false);
    const [paragraphVisible, setParagraphVisible] = useState(false);

    const handleCardClick = (index: number) => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            setFlippedIndex(flippedIndex === index ? null : index);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTitleVisible(true);
                        setParagraphVisible(true);
                    } else {
                        setTitleVisible(false);
                        setParagraphVisible(false);
                    }
                })

            },
            { threshold: 0.1 }
        )

        if (wrapRef.current) observer.observe(wrapRef.current)

        return () => observer.disconnect();
    }, [])

    return (
        <div className={styles.wrap} ref={wrapRef}>
            <div className={styles.description}>
                <h2 className={`${titleVisible ? styles.titleVisible : ''}`}>Послуги нашого центру:</h2>
                <p className={`${paragraphVisible ? styles.paragraphVisible : ''}`}>
                    В Центрі Ветеринарної Медицини є все необхідне обладнання та фахівці
                    різних ветеринарних спеціальностей,
                    тому постановка діагноза та лікування пацієнтів може відбуваєтися
                    лише в межах одного нашого закладу.
                </p>
            </div>

            <div className={styles.services_cards}>
                {cards.map((el, index) => (
                    <div key={index} className={styles.card} onClick={() => handleCardClick(index)}>
                        <div className={`${styles.card_inner} ${flippedIndex === index ? styles.is_flipped : ''}`}>
                            <div className={styles.card_front}>
                                {el.photo}
                                <h2>{el.tittle}</h2>
                                <svg height="50px" viewBox="60 80 400 380" width="50px" className={styles.label}>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M293.512,157.614c-2.102,0-4.213,0.047-6.277,0.139l0.535,11.988c0.197-0.009,0.398-0.012,0.596-0.02v31.972h12V169.8c65.105,3.47,117.383,56.072,120.342,121.311h-30.924v12h30.91c-3.117,65.088-55.33,117.52-120.328,120.984v-31.566h-12v31.641c-65.364-2.613-118.202-54.725-121.965-119.791l22.103,22.102l8.484-8.484l-36.342-36.342l-36.343,36.342l8.484,8.486l21.62-21.619c4.118,73.16,64.933,131.418,139.105,131.418c76.828,0,139.334-62.504,139.334-139.334C432.846,220.119,370.34,157.614,293.512,157.614z" />
                                                <path d="M294.365,320.688c10.605,0,19.582-7.092,22.449-16.781h55.166v-12h-54.832c-1.973-8.369-8.443-15.02-16.715-17.24v-50.609h-12v50.57c-10.047,2.633-17.482,11.787-17.482,22.648C270.951,310.186,281.455,320.688,294.365,320.688z M288.434,287.545c1.73-1.061,3.758-1.682,5.932-1.682c2.23,0,4.309,0.652,6.068,1.764c1.674,1.057,3.059,2.529,3.996,4.279c0.857,1.602,1.348,3.43,1.348,5.369c0,2.475-0.801,4.76-2.143,6.631c-2.072,2.891-5.451,4.781-9.27,4.781c-6.293,0-11.414-5.119-11.414-11.412C282.951,293.156,285.152,289.551,288.434,287.545z" />
                                                <path d="M210.693,267.988c24.593,0,44.601-20.007,44.601-44.6c0-14.489-7.132-28.141-19.077-36.518c-8.783-6.16-16.712-14.644-23.567-25.214c-8.296-12.791-22.288-20.428-37.43-20.428s-29.134,7.637-37.43,20.428c-6.854,10.569-14.784,19.053-23.568,25.214c-11.945,8.377-19.077,22.028-19.077,36.518c0,24.593,20.008,44.6,44.601,44.6H210.693z M107.144,223.388c0-10.581,5.222-20.56,13.968-26.693c10.051-7.05,19.05-16.642,26.746-28.509c6.074-9.365,16.303-14.957,27.361-14.957s21.287,5.592,27.361,14.957c7.697,11.868,16.695,21.46,26.745,28.509c8.746,6.134,13.968,16.112,13.968,26.693c0,17.976-14.625,32.601-32.601,32.601h-70.948C121.769,255.989,107.144,241.364,107.144,223.388z" />
                                                <path d="M120.284,153.459v-16.742c0-11.339-9.226-20.564-20.564-20.564s-20.564,9.226-20.564,20.564v16.742c0,11.339,9.226,20.564,20.564,20.564S120.284,164.798,120.284,153.459z M91.155,153.459v-16.742c0-4.723,3.842-8.564,8.564-8.564s8.564,3.842,8.564,8.564v16.742c0,4.723-3.842,8.564-8.564,8.564S91.155,158.182,91.155,153.459z" />
                                                <path d="M249.904,174.024c11.338,0,20.565-9.226,20.565-20.564v-16.742c0-11.339-9.227-20.564-20.565-20.564c-11.339,0-20.564,9.226-20.564,20.564v16.742C229.339,164.798,238.565,174.024,249.904,174.024z M241.339,136.717c0-4.723,3.842-8.564,8.564-8.564s8.565,3.842,8.565,8.564v16.742c0,4.723-3.842,8.564-8.565,8.564s-8.564-3.842-8.564-8.564V136.717z" />
                                                <path d="M147.085,133.589c11.339,0,20.564-9.226,20.564-20.564V96.283c0-11.339-9.226-20.564-20.564-20.564c-11.34,0-20.565,9.226-20.565,20.564v16.742C126.52,124.364,135.746,133.589,147.085,133.589z M138.52,96.283c0-4.723,3.843-8.564,8.565-8.564s8.564,3.842,8.564,8.564v16.742c0,4.723-3.842,8.564-8.564,8.564s-8.565-3.842-8.565-8.564V96.283z" />
                                                <path d="M202.538,133.589c11.34,0,20.565-9.226,20.565-20.564V96.283c0-11.339-9.226-20.564-20.565-20.564c-11.339,0-20.564,9.226-20.564,20.564v16.742C181.973,124.364,191.199,133.589,202.538,133.589z M193.973,96.283c0-4.723,3.842-8.564,8.564-8.564s8.565,3.842,8.565,8.564v16.742c0,4.723-3.843,8.564-8.565,8.564s-8.564-3.842-8.564-8.564V96.283z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className={styles.card_back}>
                                {el.details?.map((elem, i) => (
                                    <div className={styles.card_back_inner} key={i}>
                                        <p><span className={styles.accent}>✔</span>{elem}</p>
                                    </div>
                                ))}
                                <Link href={`${el.href}`} className={styles.detailed}>
                                    <span>Більше..</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link href='/all-services' className={styles.all_services_btn}>
                <p>
                    Переглянути усі послуги
                </p>
                <svg viewBox="0 0 32 32">
                    <title />
                    <g>
                        <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
                    </g>
                </svg>
            </Link>
        </div>

    )
}

export default Services;