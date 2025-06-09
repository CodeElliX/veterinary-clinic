'use client'
import styles from './advantages.module.css';
import { chirurgiya, cardiology, mri, medal } from '../../data/servicesData'
import { useEffect, useRef } from 'react';

const Advantages = () => {

    const cardRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                    } else {
                        entry.target.classList.remove(styles.animate)
                    }
                })
            },
            { threshold: 0.3 }
        );
        cardRef.current.forEach((card) => {
            if (card) observer.observe(card);
        })

        return () => observer.disconnect();
    }, [])

    const cardsData = [
        {
            icon: mri,
            title: 'Всі види операцій',
            text: `Наші хірурги мають достатню кваліфікацію та досвід для виконання
                        складних операцій, серед яких - операції при травмах хребта,
                        встановлення інтратрахеальних стентів, видалення пухлин з грудної порожнини,
                        усунення травм та розривів легень, фіксація важких переломів тазу та багато іншого..`
        },
        {
            icon: cardiology,
            title: 'Висококласна технічна база',
            text: `Для точної діагностики захворювань в розпорядженні наших фахівців є
                        високоточне автоматичне лабораторне обладнання, цифровий рентген,
                        сучасний аппарат для УЗД досліджень.`
        },
        {
            icon: chirurgiya,
            title: 'Кваліфікований персонал',
            text: `Наша команда складаєтся з фахівців різних напрямків, що дозволяє в
                        рамках одного нашого закладу поставити діагноз та провести лікування нашим
                        пацієнтам. Ми дотримуємося протоколів доказової медицини, визнаної у всьому світі.`
        }
    ];

    return (
        <div className={styles.wrap}>
            <div className={styles.wrap__years}>
                <div className={styles.wrap__years_svg}>{medal}</div>
                <h1>20 років разом із вами</h1>
            </div>
            <div className={styles.advantages}>
                {cardsData.map((el, i) => (
                    <section className={styles.advantages__card} key={i} ref={(el) => (cardRef.current[i] = el)}>
                        {el.icon}
                        <h2>{el.title}</h2>
                        <p>
                            {el.text}
                        </p>
                    </section>
                )
                )}
            </div>
            <h2 className={styles.wrap__header}>НАШІ ПЕРЕВАГИ</h2>
        </div>
    )
}

export default Advantages;