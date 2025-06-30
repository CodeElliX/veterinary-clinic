'use client'
import Image from 'next/image'
import styles from './sliderCertificates.module.css'
import { useEffect, useRef } from 'react'

const SliderCertificates = () => {

    const wrapSlidersRef = useRef<HTMLDivElement | null>(null);
    const slidersRef = useRef<HTMLDivElement | null>(null);

    const certificates = [
        '/certificates/certificate0.jpg',
        '/certificates/certificate1.jpg',
        '/certificates/certificate2.jpg',
        '/certificates/certificate3.jpg',
        '/certificates/certificate4.jpg',
        '/certificates/certificate5.jpg',
        '/certificates/certificate6.jpg',
        '/certificates/certificate7.jpg',
    ]

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!slidersRef.current) return;
                if (entry.isIntersecting) {
                    slidersRef.current.classList.add(styles.active_slider);
                } else {
                    slidersRef.current.classList.remove(styles.active_slider);
                }
            })
        },
            { threshold: 0.5 }
        )
        if (wrapSlidersRef.current) observer.observe(wrapSlidersRef.current)
        return () => observer.disconnect();

    }, [])

    return (
        <div className={styles.wrap} ref={wrapSlidersRef}>
            <div className={styles.sliders_container}>
                <div className={styles.sliders} ref={slidersRef}>
                    {[...certificates, ...certificates].map((el, i) => {
                        return (
                            <div key={i} className={styles.imageWrapper}>
                                <Image src={el} alt={`certificate${i}`} width={400} height={400} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SliderCertificates;