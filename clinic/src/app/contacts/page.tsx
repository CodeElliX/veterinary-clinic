import styles from './contacts.module.css';

const Contacts = () => {

    return (
        <div className={styles.wrap}>
            <div className={styles.description}>
                <h1>Наші філіали:</h1>
                <div className={styles.filials}>
                    <span className={styles.first_filial}>
                        <span className={styles.logo}>
                            <svg viewBox="10 2 14 28" >
                                <polygon points="10,2.001 24,16 10,30" />
                            </svg>
                        </span>
                        <h3>Центр Ветеринарної Медицини</h3>
                        <span>м.Одеса, Разумовська, 54</span>
                        <span>(094) 917-33-80</span>
                        <span>Графік роботи:</span>
                        <span>пн-вс з 8:00 до 20:00</span>
                    </span>
                    <span className={styles.second_filial}>
                        <span className={styles.logo2}>
                            <svg viewBox="10 2 14 28" >
                                <polygon points="10,2.001 24,16 10,30" />
                            </svg>
                        </span>
                        <h3>Невідкладна ветеринарна допомога</h3>
                        <span>м.Одеса, проспект Небесної Сотні, 67</span>
                        <span>(048) 702-85-23</span>
                        <span>По будням: 09:00-19:00</span>
                        <span>По вихідним: 09:00-16:00</span>
                    </span>
                </div>
            </div>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10990.674517268346!2d30.700679151078138!3d46.47507131508355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318b28cf5697%3A0x58c9a0b0d810e935!2z0KbQtdC90YLRgCDQstC10YLQtdGA0LjQvdCw0YDQvdC-0Lkg0LzQtdC00LjRhtC40L3RiyDQvdCwINCg0LDQt9GD0LzQvtCy0YHQutC-0Lk!5e0!3m2!1sru!2sua!4v1744715672212!5m2!1sru!2sua"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Contacts;