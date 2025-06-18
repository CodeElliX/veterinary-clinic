'use client'
import Image from 'next/image';
import styles from './prevention.module.css';
import { useEffect, useRef } from 'react';

const Prevention = () => {

    const blocksRef = useRef([]);
    const terapyRef = useRef(null);
    const pharmacyRef = useRef(null);
    const pharmacyVideoRef = useRef(null);
    const terapyVideoRef = useRef(null);

    useEffect(() => {
        if (pharmacyVideoRef.current || terapyVideoRef.current) {
            pharmacyVideoRef.current.playbackRate = 0.3;
            terapyVideoRef.current.playbackRate = 0.3;
        }
    }, []);

    useEffect(() => {

        const parentBlocks = [
            terapyRef.current,
            pharmacyRef.current
        ];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = parentBlocks.indexOf(entry.target);
                if (index !== -1) {
                    for (let i = index * 7; i < (index + 1) * 7; i++) {
                        const el = blocksRef.current[i];
                        if (el) {
                            if (entry.isIntersecting) {
                                el.classList.add(styles.animation);
                            } else {
                                el.classList.remove(styles.animation);
                            }
                        }
                    }
                }
            });
        }, { threshold: 0.5 });

        parentBlocks.forEach(block => block && observer.observe(block));

        return () => observer.disconnect();
    }, []);


    return (
        <div className={styles.wrap}>
            <div className={styles.terapy}>
                <Image src={'/prevention.jpg'} width={600} height={400} alt='dog' />
                <div className={styles.terapy__description} ref={terapyRef}>
                    <h1 ref={(el) => blocksRef.current[0] = el}>Ми не тільки лікуємо - ми турбуємость про хвостиків</h1>
                    <ul>
                        <li ref={(el) => blocksRef.current[1] = el}>вакцинація</li>
                        <li ref={(el) => blocksRef.current[2] = el}>чіпування</li>
                        <li ref={(el) => blocksRef.current[3] = el}>дієтологія</li>
                        <li ref={(el) => blocksRef.current[4] = el}>грумінг</li>
                        <li ref={(el) => blocksRef.current[5] = el}>чек-ап за віком</li>
                    </ul>
                    <b ref={(el) => blocksRef.current[6] = el}>... та багато інших послуг направлених на підвищення якості життя наших маленьких друзів</b>
                    <video
                        ref={terapyVideoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        width="100%"
                    >
                        <source src='/dnk_video.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>
            <div className={styles.border}></div>
            <div className={styles.pharmacy}>
                <div className={styles.pharmacy__description} ref={pharmacyRef}>
                    <h1 ref={(el) => blocksRef.current[7] = el}>Ветеринарна аптека та зоомагазин</h1>
                    <ul>
                        <li ref={(el) => blocksRef.current[8] = el}>Спеціалізовані дієти та корма преміум класу</li>
                        <li ref={(el) => blocksRef.current[9] = el}>Молоко для вигодовування крихіток</li>
                        <li ref={(el) => blocksRef.current[10] = el}>Вітаміни</li>
                        <li ref={(el) => blocksRef.current[11] = el}>Ветеринарні препарати</li>
                        <li ref={(el) => blocksRef.current[12] = el}>Попони та коміри</li>
                    </ul>
                    <b ref={(el) => blocksRef.current[13] = el}>... у нас є все необхідне для лікування наших пацієнтів</b>
                    <video
                        ref={pharmacyVideoRef}
                        autoPlay
                        playsInline
                        muted
                        loop
                        width="100%"
                    >
                        <source src='dnk_video.mp4' type='video/mp4' />
                    </video>
                </div>
                <Image src={'/prevention2.jpg'} width={600} height={600} alt='cat' />
            </div>
        </div>
    )
}

export default Prevention;