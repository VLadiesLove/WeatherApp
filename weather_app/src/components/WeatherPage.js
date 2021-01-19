import React from 'react';
import styles from './WeatherPage.module.scss';
import location from '../assets/images/location.png'
import cloudy from '../assets/images/cloudy.png'
import weatherAPI from "../api/api"

const WeatherPage = (props) => {

    // weatherAPI.getWeather("Москва")
    // .then((response) => {
    //     debugger;
    // })
    // .catch( (error) =>  {return error})
    return <div className={styles.wrapper} >
        <div className={styles.header}>
            <div className={styles.cityWrapper}>
                <div className={styles.city}>
                    {props.data.city}
                </div>
                <div className={styles.city_descr}>
                    <div onClick={() => props.getWeather("Владивосток")}>
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
                {Math.round(parseFloat(props.data.temp) -273)}º
            </div>
        </div>
        <div className={styles.descr}> {props.data.weather[0].description} </div>

        <div className={styles.bottom}>
            <div className={styles.bottom__item}>
                Ветер
                <div className={styles.info}>{props.data.wind.speed} м\с, западный</div>
            </div>
            <div className={styles.bottom__item}>
                Давление
                <div className={styles.info}>{ Math.round(props.data.press * 0.75) } мм рт. ст.</div>
            </div>
            <div className={styles.bottom__item}>
                Влажность
                <div className={styles.info}>{props.data.humidity}%</div>
            </div>
            <div className={styles.bottom__item}>
                Вероятность дождя
                <div className={styles.info}>50%</div>
            </div>
        </div>
    </div>



}

export default WeatherPage;