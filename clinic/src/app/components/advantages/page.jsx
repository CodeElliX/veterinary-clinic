import styles from './advantages.module.css';
import { chirurgiya, cardiology, mri, medal } from '../../data/servicesData'

const Advantages = () => {
    
    return (
        <div className={styles.wrap}>
            <div className={styles.wrap__years}>
                <div className={styles.wrap__years_svg}>{medal}</div>
                <h1>20 років разом із вами</h1>
            </div>
            <div className={styles.advantages}>
                <section className={styles.advantages__card}>
                    {mri}
                    <h2>Всі види операцій</h2>
                    <p>
                        Наші хірурги мають достатню кваліфікацію та досвід для виконання
                        складних операцій, серед яких - операції при травмах хребта,
                        встановлення інтратрахеальних стентів, видалення пухлин з грудної порожнини,
                        усунення травм та розривів легень, фіксація важких переломів тазу та багато іншого..
                    </p>
                </section>
                <section className={styles.advantages__card}>
                    {cardiology}
                    <h2>Висококласна технічна база</h2>
                    <p>
                        Для точної діагностики захворювань в розпорядженні наших фахівців є
                        високоточне автоматичне лабораторне обладнання, цифровий рентген,
                        сучасний аппарат для УЗД досліджень.
                    </p>
                </section>
                <section className={styles.advantages__card}>
                    {chirurgiya}
                    <h2>Кваліфікований персонал</h2>
                    <p>
                        Наша команда складаєтся з фахівців різних напрямків, що дозволяє в
                        рамках одного нашого закладу поставити діагноз та провести лікування нашим
                        пацієнтам. Ми дотримуємося протоколів доказової медицини, визнаної у всьому світі.
                    </p>
                </section>
            </div>
            <h2 className={styles.wrap__header}>НАШІ ПЕРЕВАГИ</h2>
        </div>
    )
}

export default Advantages;