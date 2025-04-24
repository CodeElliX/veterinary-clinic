'use client';
import Image from 'next/image';
import styles from './specialists.module.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { specialists } from '../../data/specialistsData';

const Specialists = () => {

    const headerRef = useRef(null);
    const timeoutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);
    const text = 'Наші спеціалісти:';

    useEffect(() => {
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
            <h2 ref={headerRef}>
                {isVisible && text.split('').map((el, index) => (
                    <span key={`${animationKey}-${index}`} style={{ animationDelay: `${index * 0.03}s` }} className={styles.letters}>
                        {el === " " ? "\u00a0" : el}
                    </span>
                ))}
            </h2>
            <div className={styles.specialists}>
                {specialists.map((el, index) => {
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
                <div className={styles.next}>
                    <Link href={'/all-specialists'}>Усі спеціалісти</Link>
                    <svg viewBox="0 0 32 32"><title />
                        <g>
                            <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Specialists;