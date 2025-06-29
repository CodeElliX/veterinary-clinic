import Image from 'next/image'
import styles from './sliderCertificates.module.css'

const SliderCertificates = () => {


    const certificates = [
        '/certificates/certificate1.jpg',
        '/certificates/certificate2.jpg',
        '/certificates/certificate3.jpg',
        '/certificates/certificate4.jpg',
        '/certificates/certificate5.jpg',
        '/certificates/certificate6.jpg',
        '/certificates/certificate7.jpg',
    ]

    return (
        <div className={styles.wrap}>
            <div className={styles.sliders_container}>
                <div className={styles.sliders}>
                    {[...certificates, ...certificates].map((el, i) => {
                        return (
                            <Image src={el} key={i} alt={`certificate${i}`} width={400} height={400} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SliderCertificates;