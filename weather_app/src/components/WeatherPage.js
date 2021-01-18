import React from 'react';
import styles from './WeatherPage.module.scss';
import location from '../assets/images/location.png'
import cloudy from '../assets/images/cloudy.png'

const WeatherPage = (props) => {

    return <div className={styles.wrapper} >
        <div className={styles.header}>
            <div className={styles.cityWrapper}>
                <div className={styles.city}>ОМСК</div>
                <div className={styles.city_descr}>
                    <div>
                        сменить город
                </div>
                    <div>
                        <div className={styles.img}><img src={location}></img></div>
                 моё местоположение
                </div>
                </div>
            </div>
            <div>o  C F</div>
        </div>

        <div className={styles.content}>
            <img src={cloudy}></img>
            <div className={styles.deg}>
                19º
            </div>
        </div>
        <div className={styles.descr}> Преимущественно солнечно </div>

        <div className={styles.bottom}>
            <div className={styles.bottom__item}>
                Ветер
                <div className={styles.info}>5 м/c, западный</div>
            </div>
            <div className={styles.bottom__item}>
                Давление
                <div className={styles.info}>752 мм рт. ст.</div>
            </div>
            <div className={styles.bottom__item}>
                Влажность
                <div className={styles.info}>60%</div>
            </div>
            <div className={styles.bottom__item}>
                Вероятность дождя
                <div className={styles.info}>10%</div>
            </div>
        </div>
    </div>



}

export default WeatherPage;