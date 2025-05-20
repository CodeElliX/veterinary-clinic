import Image from 'next/image';
import styles from './prevention.module.css';

const Prevention = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.terapy}>
                <Image src={'/prevention.jpg'} width={600} height={400} alt='cat' />
                <div className={styles.terapy__description}>
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
            <div className={styles.pharmacy}>
                <div className={styles.pharmacy__description}>
                    <h1>Ветеринарна аптека та зоомагазин</h1>
                    <ul>
                        <li>Спеціалізовані дієти так корма преміум класу</li>
                        <li>Молоко для вигодовування крихіток</li>
                        <li>Вітаміни</li>
                        <li>Ветеринарні препарати</li>
                        <li>Попони та коміри</li>
                    </ul>
                    <b>... у нас є все необхідне для лікування наших пацієнтів</b>
                </div>
                <Image src={'/prevention2.jpg'} width={600} height={600} alt='cat' />
            </div>
        </div>
    )
}

export default Prevention;