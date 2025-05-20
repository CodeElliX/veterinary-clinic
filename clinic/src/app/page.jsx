import styles from './page.module.css';
import AnimationTopText from './components/animation-text/page';
import AboutUsHomepage from './components/about-us-homepage/page';
import Services from './components/services/page';
import Image from 'next/image';
import TbsDiagnostics from './components/tbs_diagnostics/page';
import Specialists from './components/specialists/page';
import Prevention from './components/prevention/page';
import Advantages from './components/advantages/page'

export default function Home() {

  return (
    <div className={styles.homepage}>
      <section className={styles.homepage__top}>
        <video
          autoPlay
          muted
          loop
          playsInline
          width="100%"
        >
          <source src="/head_video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
        <div className={styles.video_label}>
          <p>
            Центр Ветеринарної
            Медицини <br />
          </p>
          <svg height="550" viewBox="0 0 512 512" width="550">
            <title />
            <path d="M193.69,152.84a16,16,0,0,1,29.64,2.56l36.4,121.36,30-59.92a16,16,0,0,1,28.62,0L345.89,272h96.76A213.08,213.08,0,0,0,464,176.65C463.37,114.54,413.54,64,352.92,64c-48.09,0-80,29.54-96.92,51-16.88-21.49-48.83-51-96.92-51C98.46,64,48.63,114.54,48,176.65A211.13,211.13,0,0,0,56.93,240h93.18Z" />
            <path d="M321.69,295.16,304,259.78l-33.69,67.38A16,16,0,0,1,256,336q-.67,0-1.38-.06a16,16,0,0,1-14-11.34l-36.4-121.36-30,59.92A16,16,0,0,1,160,272H69.35q14,29.29,37.27,57.66c18.77,22.88,52.8,59.46,131.39,112.81a31.84,31.84,0,0,0,36,0c78.59-53.35,112.62-89.93,131.39-112.81a316.79,316.79,0,0,0,19-25.66H336A16,16,0,0,1,321.69,295.16Z" />
            <path d="M464,272H442.65a260.11,260.11,0,0,1-18.25,32H464a16,16,0,0,0,0-32Z" />
            <path d="M48,240a16,16,0,0,0,0,32H69.35a225.22,225.22,0,0,1-12.42-32Z" />
          </svg>
        </div>
        <AnimationTopText />
      </section>
      <section className={styles.about_us}>
        <AboutUsHomepage />
      </section>
      <section className={styles.ambulance}>
        <svg height="100px" viewBox="0 0 512 512" width="100px">
          <path d="M95.468,416.532c41.078,41.077,97.838,66.489,160.532,66.489s119.448-25.412,160.532-66.489  c41.078-41.078,66.489-97.839,66.489-160.532S457.61,136.546,416.532,95.468C375.448,54.388,318.693,28.976,256,28.976  S136.546,54.388,95.468,95.468C54.385,136.546,28.973,193.307,28.973,256S54.385,375.454,95.468,416.532 M256,0  c141.382,0,256,114.615,256,256c0,141.382-114.618,256-256,256C114.612,512,0,397.382,0,256C0,114.615,114.612,0,256,0z" />
          <path d="M112.088,301.73v-91.461c0-6.092,4.987-11.076,11.076-11.076h76.027v-76.028  c0-6.091,4.987-11.076,11.076-11.076h91.465c6.095,0,11.076,4.984,11.076,11.076v76.028h76.027c6.095,0,11.076,4.984,11.076,11.076  v91.461c0,6.096-4.981,11.082-11.076,11.082h-76.027v76.021c0,6.09-4.981,11.076-11.076,11.076h-91.465  c-6.089,0-11.076-4.986-11.076-11.076v-76.021h-76.027C117.075,312.813,112.088,307.826,112.088,301.73" />
        </svg>
        <p>
          Швидка ветеринарна допомога
          <svg height="50px" viewBox="75 110 370 300" width="50px">
            <path d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z" />
          </svg>
        </p>
        <button>(094) 917-33-80</button>
      </section>
      <section className={styles.services}>
        <Services />
        <Image src={'/paws.png'} width={400} height={100} alt='paws' />
      </section>
      <section className={styles.prevention}>
        <Prevention />
      </section>
      <section className={styles.tbs_diagnostics}>
        <TbsDiagnostics />
      </section>
      <section className={styles.specialists}>
        <Specialists />
      </section>
      <section>
        <Advantages />
      </section>
    </div>
  );
}
