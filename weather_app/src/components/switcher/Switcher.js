import React from 'react'
import styles from './Switcher.module.scss'

const Switcher = () => {
    return <div><span  className={styles.deg}>º</span>           
        <label className={styles.switch} >
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    </div>
}

export default Switcher;