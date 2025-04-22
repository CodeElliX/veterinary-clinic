import Image from 'next/image';
import styles from './tbs_diagnostics.module.css';
import Link from 'next/link';

const TbsDiagnostics = () => {
    return (
        <>
            <div className={styles.photo}>
                <Image src={'/d_tbs.jpg'} alt='tbs-pathology' width={200} height={200} className={styles.pathology} />
                <Image src={'/normal_tbs.jpg'} alt='tbs_normal' width={200} height={200} className={styles.normal} />
                <Image src={'/d_tbs_2.jpg'} alt='tbs-pathology' width={200} height={200} className={styles.pathology_2} />
            </div>
            <div className={styles.description}>
                <h2>Діагностика та оцінка дисплазії тазостегнових суглобів</h2>
                <p>
                    У нашій ветеринарній клініці проводиться всебічна діагностика
                    дисплазії кульшових суглобів (HIP), що включає як клінічні тести, так
                    і сучасні методи візуалізації.
                    Дослідження охоплює тест Ортолані з визначенням кута вправлення (кут Ортолані),
                    а також тест Барлоу (кут повторного вивиху), що доповнюється рентгенографією
                    кульшових суглобів у різних проекціях.
                </p>
                <button><Link href='/diagnostics-tbs'>Детальніше</Link></button>
            </div>
        </>
    )
}

export default TbsDiagnostics;
