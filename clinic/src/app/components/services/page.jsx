import Link from 'next/link';
import styles from './services.module.css';
import { cards } from '../../data/servicesData';

const Services = () => {

    return (
        <>
            <div className={styles.description}>
                <h2>Послуги нашого центру:</h2>
                <p>
                    В Центрі Ветеринарної Медицини є все необхідне обладнання та фахівці різних ветеринарних спеціальностей,
                    тому постановка діагноза та лікування пацієнтів може відбуваєтися лише в межах одного нашого закладу.
                </p>
            </div>
            <div className={styles.services_cards}>
                {cards.map((el, index) => {
                    return <div key={index} className={styles.card}>
                        {el.photo}
                        <h2>{el.tittle}</h2>
                    </div>
                })}
            </div>
            <Link href='/all-services' className={styles.all_services_btn}><button>Переглянути усі послуги</button></Link>
        </>
    )
}

export default Services;