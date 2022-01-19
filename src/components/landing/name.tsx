import React from "react";
import styles from '../../styles/components/landing/name.module.css'
import ageStyles from '../../styles/components/landing/age.module.css'

export const Age = () => {
    return (
        <div className={ageStyles.container}>
                <p className={ageStyles.name}>DREX</p>
                <hr className={ageStyles.breaker}/>
                <p className={ageStyles.age}>16</p>
        </div>
    )
}

const Name = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bgBoxContainer}>
                <div className={styles.blackbox}></div>
                <div className={styles.whitebox}></div>                
            </div>
            <p className={styles.title}><span style={{color : "white"}}>TyFa</span>ngXV</p>
            <hr className={styles.breaker}/>
            <span className={styles.subtitleContainer}>
                <p className={styles.subtitle}><span style={{color : "white"}}>Student ● Programmer </span><span>● multipotentialite</span></p>
            </span>
        </div>
    );
    }



    export default Name;