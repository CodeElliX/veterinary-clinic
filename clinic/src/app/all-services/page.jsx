import styles from './all-services.module.css';
import { allCards } from '../data/servicesData';
import Link from 'next/link';
import Image from 'next/image';

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
                            <Image src={`${el.back}`} width={415} height={510} alt='cards' />
                                {el.photo}
                                <h2>{el.tittle}</h2>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AllServices;