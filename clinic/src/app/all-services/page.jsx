import styles from './all-services.module.css';
import { allCards } from '../data/servicesData';
import Link from 'next/link';

const AllServices = () => {

    const titleToPath = {
        'Хірургічні маніпуляції': 'surgery',
        'МРТ та Компьютерна томографія': 'mri',
        'Стаціонар: післяопераційний та інфекційний': 'hospital',
        'Експертиза по діагностіці ТБС': 'diagnostics-tbs',
        'Документи для вивозу тварин за кордон': 'documents',
        'УЗД абдомінальне': 'ultrasound',
        'Лабораторні дослідження': 'laboratory',
        'Кардіологічне обстеження': 'cardiology',
        'Ендоскопія': 'endoscopy',
        'Онкологія': 'oncology',
        'Неврологія': 'neurology',
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.description}>
                <h1>Усі послуги нашого центру:</h1>
                <p>Оберіть послугу, щоб дізнатися деталі та ціни.</p>
            </div>
            <div className={styles.services_cards}>
                {allCards.map((el, index) => {
                    const path = titleToPath[el.tittle]
                    return (
                        <Link href={`${path}`}  key={index} className={styles.card}>
                            <div>
                                {el.photo}
                                <h2>{el.tittle}</h2>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AllServices;