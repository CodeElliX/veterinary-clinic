import styles from './all-services.module.css';
import { allCards } from '../data/servicesData';

const AllServices = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.description}>
                <h1>Усі послуги нашого центру:</h1>
                <p>Оберіть послугу, щоб дізнатися деталі та ціни.</p>
            </div>
            <div className={styles.services_cards}>
                {allCards.map((el, index) => {
                    return <div key={index} className={styles.card}>
                        {el.photo}
                        <h2>{el.tittle}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllServices;