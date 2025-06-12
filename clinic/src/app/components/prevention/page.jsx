'use client'
import Image from 'next/image';
import styles from './prevention.module.css';
import { useEffect, useRef } from 'react';

const Prevention = () => {

    const blocksRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animation);
                }
            })
        },
            { threshold: 0.3 }
        )
        blocksRef.current.forEach(el => el && observer.observe(el))
        return () => observer.disconnect();
    }, [])

    return (
        <div className={styles.wrap}>
            <div className={styles.terapy}>
                <Image src={'/prevention.jpg'} width={600} height={400} alt='dog' />
                <div className={styles.terapy__description} ref={(el) => blocksRef.current[1] = el}>
                    <h1>Ми не тільки лікуємо - ми турбуємость про хвостиків</h1>
                    <ul>
                        <li>вакцинація</li>
                        <li>чіпування</li>
                        <li>дієтологія</li>
                        <li>грумінг</li>
                        <li>чек-ап за віком</li>
                    </ul>
                    <b>... та багато інших послу направлені на профілактування захворювань та підвищення якості життя наших маленьких друзів</b>
                </div>
            </div>
            <div className={styles.border}></div>
            <div className={styles.pharmacy}>
                <div className={styles.pharmacy__description} ref={(el) => blocksRef.current[2] = el}>
                    <h1>Ветеринарна аптека та зоомагазин</h1>
                    <ul>
                        <li>Спеціалізовані дієти та корма преміум класу</li>
                        <li>Молоко для вигодовування крихіток</li>
                        <li>Вітаміни</li>
                        <li>Ветеринарні препарати</li>
                        <li>Попони та коміри</li>
                    </ul>
                    <b>... у нас є все необхідне для лікування наших пацієнтів</b>
                </div>
                <Image src={'/prevention2.jpg'} width={600} height={600} alt='cat' ref={(el) => blocksRef.current[3] = el} />
            </div>
        </div>
    )
}

export default Prevention;