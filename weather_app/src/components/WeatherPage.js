import React from 'react';
import styles from './WeatherPage.module.scss';
import location from '../assets/images/location.png'
import sun from '../assets/images/sun.png'
import cloud from '../assets/images/cloud.png'
import rain from '../assets/images/rain.png'
import strom from '../assets/images/strom.png'
import partlyCloudly from '../assets/images/partlyCloudly.png'
import Switcher from './switcher/Switcher';

const WeatherPage = (props) => {
    return <div className={styles.wrapper} >
        <div className={styles.header}>
            <div className={styles.cityWrapper}>
                <div className={styles.city} onClick={props.toggleEditMode}>
                    {
                        !props.editMode && <div> {props.city} </div>
                        
                    }
                    {
                        props.editMode && <input onChange={(e) => props.changeCity(e)}
                                            value={props.city} 
                                            onBlur={props.toggleEditMode } 
                                            autoFocus={true}/>
                    }
                </div>
                
                <div className={styles.city_descr}>
                    <div onClick={props.toggleEditMode}>
                        сменить город
                </div>
                    <div>
                        <div className={styles.img}><img src={location}></img></div>
                 моё местоположение
                </div>
                </div>
                
            </div>
            <div className={styles.switcher} onClick={() =>props.changeDeg()}><Switcher /></div>
        </div>

        <div className={styles.content}>
            {(props.data.weather[0].main == "Clear") && <img src={sun}></img>}
            {(props.data.weather[0].main == "Clouds") && <img src={cloud}></img>}
            {(props.data.weather[0].main == "Storm") && <img src={strom}></img>}
            {(props.data.weather[0].main == "Rain") && <img src={rain}></img>}
            
            <div className={styles.deg}>
                { props.deg && Math.round(parseFloat(props.data.temp) -273)}
                { !props.deg && Math.round((parseFloat(props.data.temp)-273) * 9 / 5 + 32)}
                º
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