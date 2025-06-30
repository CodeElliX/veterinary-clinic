'use client'
import Image from 'next/image';
import styles from './prevention.module.css';
import { useEffect, useRef } from 'react';

const Prevention = () => {

    const blocksRef = useRef<(HTMLElement | null)[]>([]);
    const terapyRef = useRef<HTMLDivElement | null>(null);
    const pharmacyRef = useRef<HTMLDivElement | null>(null);
    const pharmacyVideoRef = useRef<HTMLVideoElement | null>(null);
    const terapyVideoRef = useRef<HTMLVideoElement | null>(null);

    const setBlockRef = (index: number) => (el: HTMLElement | null) => {
        blocksRef.current[index] = el;
    };

    useEffect(() => {
        if (pharmacyVideoRef.current) pharmacyVideoRef.current.playbackRate = 0.3;
        if (terapyVideoRef.current) terapyVideoRef.current.playbackRate = 0.3;
    }, []);

    useEffect(() => {

        const parentBlocks: (HTMLElement | null)[] = [
            terapyRef.current,
            pharmacyRef.current
        ];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target as HTMLElement;
                const index = parentBlocks.indexOf(target);
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
                    <h1 ref={setBlockRef(0)}>Ми не тільки лікуємо - ми турбуємость про хвостиків</h1>
                    <ul>
                        <li ref={setBlockRef(1)}>вакцинація</li>
                        <li ref={setBlockRef(2)}>чіпування</li>
                        <li ref={setBlockRef(3)}>дієтологія</li>
                        <li ref={setBlockRef(4)}>грумінг</li>
                        <li ref={setBlockRef(5)}>чек-ап за віком</li>
                    </ul>
                    <b ref={setBlockRef(6)}>... та багато інших послуг направлених на підвищення якості життя наших маленьких друзів</b>
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
                    <h1 ref={setBlockRef(7)}>Ветеринарна аптека та зоомагазин</h1>
                    <ul>
                        <li ref={setBlockRef(8)}>Спеціалізовані дієти та корма преміум класу</li>
                        <li ref={setBlockRef(9)}>Молоко для вигодовування крихіток</li>
                        <li ref={setBlockRef(10)}>Вітаміни</li>
                        <li ref={setBlockRef(11)}>Ветеринарні препарати</li>
                        <li ref={setBlockRef(12)}>Попони та коміри</li>
                    </ul>
                    <b ref={setBlockRef(13)}>... у нас є все необхідне для лікування наших пацієнтів</b>
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