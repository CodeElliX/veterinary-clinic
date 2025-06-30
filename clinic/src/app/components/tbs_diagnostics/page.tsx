'use client'
import Image from 'next/image';
import styles from './tbs_diagnostics.module.css';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const TbsDiagnostics = () => {

    const imgRef = useRef<(HTMLElement | null)[]>([]);

    const setImgRef = (index: number) => (el: HTMLElement | null) => {
        imgRef.current[index] = el;
    };

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animation);
                } else {
                    entry.target.classList.remove(styles.animation);
                }
            })
        },

            { threshold: 0.5 }
        )
        imgRef.current.forEach((el) => el && observer.observe(el))
        return () => observer.disconnect();
    }, [])

    return (
        <div className={styles.wrap}>
            <div className={styles.photo}>
                <Image src={'/d_tbs.jpg'} alt='tbs-pathology' width={200} height={200} className={styles.pathology} ref={setImgRef(0)} />
                <Image src={'/normal_tbs.jpg'} alt='tbs_normal' width={200} height={200} className={styles.normal} />
                <Image src={'/d_tbs_2.jpg'} alt='tbs-pathology' width={200} height={200} className={styles.pathology_2} ref={setImgRef(1)} />
            </div>
            <div className={styles.description}>
                <h2>Діагностика та оцінка дисплазії тазостегнових суглобів</h2>
                <p>
                    У нашій ветеринарній клініці проводиться всебічна діагностика
                    дисплазії кульшових суглобів (HIP), що включає як клінічні тести, так
                    і сучасні методи візуалізації.
                    Дослідження охоплює тест Ортолані з визначенням кута вправлення (кут Ортолані),
                    а також тест Барлоу (кут повторного вивиху), що доповнюється рентгенографією
                    кульшових суглобів у різних проекціях.
                </p>
                <Link href='/diagnostics-tbs'><p className={styles.btn}><span data-text="Детальніше" >Детальніше</span></p></Link>
            </div>
        </div>
    )
}

export default TbsDiagnostics;
