import styles from './all-services.module.css';
import { cards } from '../data/servicesData';

const AllServices = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.services_cards}>
                {cards.map((el, index) => {
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